import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  //Products list state
  const [products, setProducts] = useState([
    //Default or initial value for 'products'
    { id: 1, name: "Test Product 1", price: 50 },
    { id: 2, name: "Test Product 2", price: 40 },
    { id: 3, name: "Test Product 3", price: 30 },
    { id: 4, name: "Test Product 4", price: 20 },
  ]);

  //Shopping cart state
  const [ cart, setCart ] = useState([]);

  const date = new Date().getFullYear();

  return (
    <Fragment>
      <Header title="React Basics App" subtitle="A React basics learning app" />

      <h1>Products List</h1>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          cart={cart}
          setCart={setCart} />
      ))}

      <Cart
        cart={cart}
        setCart={setCart} />

      <Footer author="Isaac R.F." date={date} />
    </Fragment>
  );
}

export default App;
