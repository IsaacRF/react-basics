import React from "react";
import styles from "./styles.module.scss";

import Product from "../Product";

export interface CartProps {
  cart: any;
  setCart: Function;
}

const Cart: React.FC<CartProps> = ({ cart, setCart }) => (
  <div className={styles.container}>
    <h2>Shopping Cart</h2>
    {cart.length === 0 ? (
      <p>Cart is empty</p>
    ) : (
      cart.map((product: any) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          isInCartContext={true}
          cart={cart}
          setCart={setCart}
        />
      ))
    )}
  </div>
);

export default Cart;
