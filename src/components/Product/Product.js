import React from 'react';

const Product = (props) => {
    const { name, id } = props.product;
    const { addToCart } = props;
    return (
        <div style={{ border: "1px solid purple", margin: '80px', padding: '10px' }}>
            <h2>{name}</h2>
            <button onClick={() => addToCart(id, name)}>add to cart</button>
        </div >
    );
};

export default Product;