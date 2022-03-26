import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../libs/firebase'
import { Button } from '@mui/material';

export function PageNotFound(props) {
    const [isUser, setIsUser] = useState(false)
    const navigator = useNavigate();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsUser(true)
        } else {
            setIsUser(false)
            navigator('/')
        }
    })

    return (
        <>
            {isUser && <>
                <Button variant="contained" onClick={() => navigator('/dashboard')}>Back to Homepage</Button>
                <Grid container component="main" sx={{ height: '100vh' }} alignItems="center" justifyContent="center">
                    <div class="number">404</div>
                    <div class="text">Moxie Print:<br /><span>Ooops...</span><br />page not found</div>
                </Grid>
            </>}
        </>
    )
}
