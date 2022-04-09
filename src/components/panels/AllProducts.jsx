import React, { useEffect } from 'react';
import { db } from "../../libs/firebase";
import { ref, update } from 'firebase/database';
import { Card, CardHeader, CardMedia, CardContent, Typography, Container, Grid, IconButton, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useGetProducts } from '../../hooks/useGetAllProducts'

export function AllProducts({ title, ...props }) {
    const productList = useGetProducts()
    const navigator = useNavigate();

    useEffect(() => {
        
    }, [])

    //delete button
    const handleDelete = async (key) => {
        if (window.confirm("Are you sure to delete this item?")) {
            const updates = {};
            updates['/product/' + key] = null;
            update(ref(db), updates);
            //fetchData()
        }
    }

    const handleAdd = () => {
        navigator('/dashboard/add')
    }

    //edit button
    const handleEdit = async (key) => {
        navigator(`/dashboard/edit/${key}`)
    }

    return (
        <>
            <h2 >{title}</h2>
            <Button variant="contained" color="success" className='float-right add-product' onClick={handleAdd}>
                Add Product
            </Button>


            <Container>
                <Grid container spacing={2}>
                    {productList ? productList.map((p, k) => {
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
                    }) : null}
                </Grid>
            </Container>
        </>
    )
}