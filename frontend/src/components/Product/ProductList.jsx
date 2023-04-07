import { useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import ProductCard from './ProductCard'

import file from '../../config.json';

/*
    ProductList component is simply a collection of products. 
    and it filtrs them in 2 ways:
    -by calling 'filterProductsBy' function (for only side Filters like 'Categories', 'Brands', 'Materials', 'Colors')
    -by updating query parameter (for top and bottom Filters like 'Price', 'Pagination')
    It accept only map in parameters
*/

const ProductList = forwardRef(({ query }, ref) => {

    const convertToString = (searchParams)=>{
        let result = '?'
        if(searchParams === undefined)
            return ''
        
        searchParams.forEach((value, key) => {
            result = result.concat(`${key}=${value}&`)
        });

        return result
    }

    const searchProducts = async (searchParams) => {
        const API_URL = file.API_URL

        const params = convertToString(searchParams)
            
        const response = await fetch(`${API_URL}/api/v1/products${params}`)
        const data = await response.json()
        setProducts(data)
    }

    useImperativeHandle(ref, () => ({
        filterProductsBy(searchParams) {
            searchProducts(searchParams)
        }
    }));

    const [products, setProducts] = useState([])



    useEffect(() => {
        searchProducts(query)
    }, [query])

    return (
        <div class="row mx-0">
            {
                products?.length > 0
                    ?
                    (
                        products.map((product) =>
                        (
                            <ProductCard product={product} />
                        ))
                    )
                    :
                    (
                        <h1>
                            Products not found
                        </h1>
                    )

            }
        </div>



    )
})
export default ProductList