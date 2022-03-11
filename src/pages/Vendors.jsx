import React from "react";
import { Layout } from '../components/Layout';

export function Vendors() {
    const content = <p>Vendors Contents</p>

    return (
        <Layout
            title='Moxie Print Vendors'
            content={content}
        />
    )
}