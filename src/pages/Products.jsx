import React from "react";
import { Layout } from '../components/Layout';

export function Products() {
    const content = <p>Products Contents</p>

    return (
        <Layout
            title='Moxie Products'
            content={content}
        />
    )
}