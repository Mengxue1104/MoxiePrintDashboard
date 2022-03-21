import React, {useState} from 'react';

import { Layout } from '../components/Layout';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from 'libs/firebase' 

export function DashBoard() {
    const content = <p>DashBoard Contents</p>
    const [isUser, setIsUser] = useState(false)
    const navigator = useNavigate();
        onAuthStateChanged(auth, (user) => {
            if(user){
                setIsUser(true)
            }else {
                setIsUser(false)
                //login page
                navigator('/')
            }
        })
        if(isUser){
            return (
                <Layout 
                    title='Moxie Print Dashboard'
                    content={content}
                />
            )
        } else {
            return null
        }
}