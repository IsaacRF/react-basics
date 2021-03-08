import React from 'react'

export interface Product {
    id: number,
    name: string,
    price: number
}

const Product: React.FC<Product> = ({id, name, price}) => {
    const selectProduct = (id: number) => {
        console.log(`selectProduct(${id})`);
    }

    return (
        <div>
            <h2>{name}</h2>
            <p>{price}$</p>
            <button
                type="button"
                onClick={() => selectProduct(id) }
            >Comprar</button>
        </div>
     );
}

export default Product;