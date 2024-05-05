import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Order } from "./Pages/Order";
import { Catalog } from "./Pages/Catalog";
import { Cart } from "./Pages/Cart";
import { Routes, Route, useNavigate } from "react-router-dom";
import { LoginSignup } from "./Pages/LoginSignup.js";
import { useState, useEffect } from "react";
import AuthContextProvider from "./AuthContext";
import AboutItem from "./Pages/AboutItem.js";
import Favorites from "./Pages/Favorites.js";

export default function App() {
  const [productsList, setProductsList] = useState([]);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState([]);
  const [sort, setSort] = useState("");
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  async function getProducts() {
    try {
      const response = await fetch(
        "https://mocki.io/v1/c89fa43b-5c0f-4d63-9a1a-2b1a769c23a3"
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

  const handleAddFavorites = (product) => {
    const result = productsList;
    const obj = result.find((el) => el.id === product.id);
    if (obj) obj.isFavorite = !obj.isFavorite;
    setFavorites(
      result.filter((item) => item.isFavorite === product.isFavorite)
    );
    return result;
  };
  const handleRemoveFavorites = (product) => {
    const result = favorites.find((el) => el.id === product.id);
    setFavorites(
      favorites.map((item) =>
        item.id === product.id ? (result.isFavorite = !result.isFavorite) : item
      )
    );
  };

  const handleRemoveProduct = (product) => {
    console.log(cartItems.length);
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
  const handleAddOrderSingle = (product) => {
    setOrder([{ ...product, quantity: 1 }]);
    navigate("/order");
    console.log(product);
  };

  return (
    <div className="wrapper">
      <AuthContextProvider>
        <Header setSearch={setSearch} cartItems={cartItems} />
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
                handleAddFavorites={handleAddFavorites}
                handleRemoveFavorites={handleRemoveFavorites}
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
          <Route
            path="/favorites"
            element={
              <Favorites
                list={favorites}
                search={search}
                sort={sort}
                setFavorites={setFavorites}
                handleAddFavorites={handleAddFavorites}
                handleAddProduct={handleAddProduct}
                handleRemoveFavorites={handleRemoveFavorites}
              />
            }
          />
          <Route
            path="/:id"
            element={
              <AboutItem
                products={productsList}
                handleAddProduct={handleAddProduct}
                handleAddOrderSingle={handleAddOrderSingle}
                handleAddFavorites={handleAddFavorites}
                handleRemoveFavorites={handleRemoveFavorites}
              />
            }
          />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}
