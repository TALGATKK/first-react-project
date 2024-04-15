import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Order } from "./Pages/Order";
import { Catalog } from "./Pages/Catalog";
import { Cart } from "./Pages/Cart";
import { Routes, Route } from "react-router-dom";
import { LoginSignup } from "./Pages/LoginSignup.js";
import { useState, useEffect } from "react";
import AuthContextProvider from "./AuthContext";

export default function App() {
  const [productsList, setProductsList] = useState([]);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState([]);
  const [sort, setSort] = useState("");
  async function getProducts() {
    try {
      const response = await fetch(
        "https://mocki.io/v1/174b379d-2a39-43ea-af47-6ff7a549b9f5"
      );
      const resultJson = await response.json();
      setProductsList(resultJson);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };
  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleAddOrder = () => {
    setOrder([...order, ...cartItems]);
    setCartItems([]);
  };

  return (
    <div class="wrapper">
      <AuthContextProvider>
        <Header setSearch={setSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <Catalog
                productsList={productsList}
                handleAddProduct={handleAddProduct}
                search={search}
                setSort={setSort}
                sort={sort}
              />
            }
          />
          <Route path="/login" element={<LoginSignup />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
                handleAddOrder={handleAddOrder}
                handleClearCart={handleClearCart}
              />
            }
          />
          <Route path="/order" element={<Order order={order} />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}
