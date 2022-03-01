import React from "react";

function Product ({productType,productPic,productName, productPrice }) {

    return (
        <product>
        <article>
            <span>{productType}</span>
            <img src={productPic} alt={productName}/>
            <p>{productName}</p>
            <h4>€{productPrice}</h4>
        </article>
        </product>
    );
}

export default Product;