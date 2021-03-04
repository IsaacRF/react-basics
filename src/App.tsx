import React, { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const date = new Date().getFullYear();

  return (
    <Fragment>
      <Header title="React Basics App" subtitle="A React basics learning app" />
      <Footer author="Isaac R.F." date={date} />
    </Fragment>
  );
}

export default App;
