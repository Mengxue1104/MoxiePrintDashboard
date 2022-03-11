import * as React from 'react';
import { Layout } from '../components/Layout';

export function DashBoard() {
    const content = <p>DashBoard Contents</p>

    return (
        <Layout 
            title='Moxie Print Dashboard'
            content={content}
        />
    )
}