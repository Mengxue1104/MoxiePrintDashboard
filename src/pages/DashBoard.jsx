import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'

import { Layout } from '../components/Layout';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../libs/firebase'

export function DashBoard(props) {
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
            {isUser && <Layout
                title='Moxie Print Dashboard'
                content={<Outlet />}
            />}
        </>

    )
}