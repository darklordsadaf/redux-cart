import React from 'react';

const Product = (props) => {
    const { name, id } = props.product;
    return (
        <div style={{ border: "1px solid purple", margin: '80px', padding: '10px' }}>
            <h2>{name}</h2>
            <button>add to cart</button>
        </div >
    );
};

export default Product;