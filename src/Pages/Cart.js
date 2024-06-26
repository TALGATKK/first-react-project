import React from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import "./CSS/Cart.css";

export function Cart({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleAddOrder,
  handleClearCart,
}) {
  const { isLoggedIn } = useContext(AuthContext);
  const OrderButton = () => {
    isLoggedIn
      ? handleAddOrder(cartItems)
      : alert("Для заказа товара необходимо авторизоваться!");
  };
  return (
    <div className="cart-items">
      <div className="cart-items-header">Корзина:</div>
      {console.log(cartItems.length)}
      {cartItems.length === 0 && (
        <div className="cart-items-empty">Пока нет товаров в корзине</div>
      )}
      {cartItems.map((item) => {
        return (
          <div key={item.id} className="cart-items-list">
            <img
              className="cart-items-image"
              src={item.image}
              alt={item.title}
            />

            <span>{item.title} </span>
            <button onClick={() => handleRemoveProduct(item)}>-</button>
            <span className="quantity"> {item.quantity} </span>
            <button onClick={() => handleAddProduct(item)}>+</button>
            <span className="cart-items-price">
              {item.price * item.quantity}$
            </span>
          </div>
        );
      })}
      <p className="cart-items-total">
        {" "}
        Общая сумма:
        {cartItems
          .map((item) => item.price * item.quantity)
          .reduce((total, value) => total + value, 0)}{" "}
        $
      </p>
      <button onClick={handleClearCart} className="cart-items-clear-button">
        {" "}
        <p className="text-white">Очистить корзину</p>
      </button>

      <button onClick={OrderButton} className="cart-items-pay-button">
        Заказать
      </button>
    </div>
  );
}
