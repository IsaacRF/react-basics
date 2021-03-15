import React from "react";

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  isInCartContext?: boolean;
  cart: ProductProps[];
  setCart: Function;
}

const Product: React.FC<ProductProps> = ({ id, name, price, isInCartContext, cart, setCart }) => {
  /**
   * Adds a product to the cart
   * @param id Product Id
   */
  const selectProduct = (id: number) => {
    console.log(`selectProduct(${id})`);
    setCart([...cart, { id, name, price }]);
  };

  /**
   * Remove a product from cart
   * @param id Product Id
   */
  const removeProduct = (id: number) => {
    const products = cart.filter(product => product.id !== id);
    setCart(products);
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>{price}$</p>

      {!isInCartContext ? (   //FIXME: Need another condition to differ between product list and cart
        <button type="button" onClick={() => selectProduct(id)}>
          Buy
        </button>
      ) : (
        <button type="button" onClick={() => removeProduct(id)}>
          Remove
        </button>
      )}
    </div>
  );
};

export default Product;
