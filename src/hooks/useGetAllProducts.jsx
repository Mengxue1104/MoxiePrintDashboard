import { useState, useEffect } from 'react'
import { ref, get } from 'firebase/database'

import { db } from "../libs/firebase"


function useGetProducts(path) {
    const [productData, setProductData] = useState(null)

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const product = ref(db, '/product')
        const productSnapShot = await get(product)
        const productData = { ...productSnapShot.val() }
        const products = Object.keys(productData).map(k => {
            return productData[k]
        })

        setProductData(products)
    }

    return productData
}

export { useGetProducts }