import React, { useEffect, useState } from 'react';
import './Shop.css';
import Pro from '../Pro/Pro';

const Shop = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))


    }, []);
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Pro key={product.id}
                        product={product}></Pro>)

                }

            </div>
            <div className="cart-container">

            </div>
        </div>
    );
};

export default Shop;