import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import { GlobalStyle } from "./globalStyle";
import { productData, productDataTwo } from "./Components/Products/data";
import { Toaster } from "react-hot-toast";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
      <Feature />
      <Products heading="Choose your Sweet" data={productDataTwo} />
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
