import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, OutlinedInput, Button, Stack, TextField } from '@mui/material';
import { db } from "../../libs/firebase";
import { ref as storageRef, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import { get, ref, push, set, update } from 'firebase/database';
import { useNavigate, useParams } from 'react-router-dom'

export function AddProduct({ title, ...props }) {
    const [product, setProduct] = useState({
        title: '',
        custom: '',
        image: '',
        price: 0
    })
    const [image, setImage] = useState(null)
    const [file, setFile] = useState("")
    const [isRendered, setIsRendered] = useState(false)

    const navigator = useNavigate();
    const { key } = useParams()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const product = ref(db, '/product')
        const productSnapShot = await get(product)
        const productData = { ...productSnapShot.val() }
        const products = Object.keys(productData).map(k => {
            return productData[k]
        })


        const productRec = products.filter(p => p.key === key)
        if (productRec.length > 0) {
            setProduct(productRec[0])
            setImage(productRec[0].image)
        }

        setIsRendered(true)
    }

    const handleChange = (prop) => (event) => {
        setProduct({ ...product, [prop]: event.target.value })
    }

    const save = async () => {
        const dataRef = ref(db, 'product');
        let urlPath = ""

        if (!product.key && !file) alert("Please upload image")

        if (file.name !== undefined) {
            const imageRef = storageRef(getStorage(), `${file.name}`);
            await uploadBytes(imageRef, file);
            urlPath = await getDownloadURL(imageRef)
        }

        if (product.key) {
            const postData = {
                key: product.key,
                sku: product.sku,
                title: product.title,
                custom: product.custom,
                image: file.name === undefined ? product.image : urlPath,
                price: product.price
            }
            const updates = {};
            updates['/product/' + product.key] = postData;
            update(ref(db), updates);
        }
        else {
            const itemRef = await push(dataRef)

            set(itemRef, {
                key: itemRef.key,
                sku: `jhvr${itemRef.key}`,
                title: product.title,
                custom: product.custom,
                image: urlPath,
                price: product.price
            })
        }


        navigator('/dashboard')
    }

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0])

            let reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    return (
        <>
            {isRendered && <>
                <h2>{title}</h2>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <TextField
                        variant="filled"
                        required
                        label="Title"
                        value={product.title}
                        onChange={handleChange('title')}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }}>
                    <TextField
                        variant="filled"
                        required
                        label="Description"
                        value={product.custom}
                        onChange={handleChange('custom')}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }}>
                    <TextField
                        variant="filled"
                        required
                        label="Price"
                        type="number"
                        InputProps={{
                            inputProps: {
                                min: 0,
                                step: 0.01
                            }
                        }}
                        value={parseFloat(product.price).toFixed(2)}
                        onChange={handleChange('price')}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }}>
                    <TextField
                        required
                        type='file'
                        onChange={onImageChange}
                    />
                </FormControl>
                {image && <img src={image} alt="preview image" style={{ maxWidth: '100%', maxHeight: '600px' }} />}

                <Stack spacing={2} direction="row" justifyContent="flex-end">
                    <Button variant="contained" type="submit" onClick={save}>Save</Button>
                    <Button variant="secondary" onClick={() => navigator('/dashboard')}>Cancel</Button>
                </Stack>
            </>}
        </>
    )
}