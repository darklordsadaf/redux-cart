import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const product = [
        { name: "Dell Laptop", id: 1 },
        { name: "Asus Laptop", id: 2 },
        { name: "Lenovo Laptop", id: 3 },
        { name: "HP Laptop", id: 4 },
        { name: "Acer Laptop", id: 5 }
    ]
    return (
        <div>
            <h1>This is Shop</h1>
            {
                product.map(pd => <Product product={pd}></Product>)
            }
        </div>
    );
};

export default Shop;