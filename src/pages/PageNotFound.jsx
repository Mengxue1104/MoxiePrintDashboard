import React from "react";
import Grid from '@mui/material/Grid';

export function PageNotFound(props) {
    return (
        <>
            <Grid container component="main" sx={{ height: '100vh' }} alignItems="center" justifyContent="center">
                <div class="number">404</div>
                <div class="text"><span>Ooops...</span><br />page not found</div>
            </Grid>
        </>
    )
}
