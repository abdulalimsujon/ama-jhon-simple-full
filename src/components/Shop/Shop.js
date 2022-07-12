import React, { useEffect, useState } from 'react';
import './Shop.css';
import Pro from '../Pro/Pro';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))


    }, []);
    const handleClick = (product) => {
        //console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);

    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Pro key={product.id}
                        handleClick={handleClick}
                        product={product}></Pro>)

                }

            </div>
            <div className="cart-container">
                <h1>Order Summary</h1>
                <p>selected item{cart.length}</p>

            </div>
        </div>
    );
};

export default Shop;