import React from 'react'

export interface Product {
    id: number,
    name: string,
    price: number,
    cart: any,
    setCart: any
}

const Product: React.FC<Product> = ({id, name, price, cart, setCart}) => {
    const selectProduct = (id: number) => {
        console.log(`selectProduct(${id})`);
        setCart([
            ...cart,
            {id, name, price}
        ]);
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