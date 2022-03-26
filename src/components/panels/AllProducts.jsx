import React, { useState, useEffect } from 'react';
import { db } from "../../libs/firebase";
import { get, ref, update } from 'firebase/database';
import { Card, CardHeader, CardMedia, CardContent, Typography, Container, Grid, IconButton, Menu, MenuItem, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export function AllProducts({ title, ...props }) {
    const [productList, setProductList] = useState([])
    const [anchorEl, setAnchorEl] = useState(null)
    const navigator = useNavigate();

    useEffect(() => {
        fetchData()
    }, [])

    //get data
    const fetchData = async () => {
        const product = ref(db, '/product')
        const productSnapShot = await get(product)
        const productData = { ...productSnapShot.val() }
        const products = Object.keys(productData).map(k => {
            return productData[k]
        })

        setProductList(products)
    }

    //delete button
    const handleDelete = async (key) => {
        if (window.confirm("Are you sure to delete this item?")) {
            const updates = {};
            updates['/product/' + key] = null;
            update(ref(db), updates);
            fetchData()
        }
    }

    const handleAdd = () => {
        navigator('/dashboard/add')
    }

    //edit button
    const handleEdit = async (key) => {
        navigator(`/dashboard/edit/${key}`)
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <h2 >{title}</h2>
            <Button variant="contained" color="success" className='float-right add-product' onClick={handleAdd}>
                Add Product
            </Button>


            <Container>
                <Grid container spacing={2}>
                    {productList.map((p, k) => {
                        return p.key && <Grid item xl={4} key={k}>
                            <Card sx={{ width: 345 }} variant="outlined">
                                <CardHeader
                                    action={
                                        <>
                                            <IconButton aria-label="edit" onClick={() => handleEdit(p.key)}>
                                                <EditIcon  />
                                            </IconButton>
                                            <IconButton aria-label="delete" onClick={() => handleDelete(p.key)}>
                                                <DeleteIcon  />
                                            </IconButton>
                                        </>
                                    }
                                    title={p.title}
                                    subheader={`$${parseFloat(p.price).toFixed(2)}`}
                                />


                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={p.image}
                                    alt="product img"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {p.custom}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    })}
                </Grid>
            </Container>
        </>
    )
}