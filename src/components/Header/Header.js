import React from "react";
import "./Header.css";
import logo from "./logo.png";
import { GiOpenBook } from "react-icons/gi";
import { BsBoxSeam } from "react-icons/bs";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { LuSmilePlus } from "react-icons/lu";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { Button, ConfigProvider, Input } from "antd";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { FaHeart } from "react-icons/fa6";

export default function Header(props) {
  const { setSearch, cartItems } = props;
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return (
    <header>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              paddingInline: 0,
              paddingBlock: 0,
              colorPrimary: "#BF240C",
              colorPrimaryActive: "#BF240C",
              colorPrimaryHover: "#BF240C",
              colorPrimaryBorder: "#ffffff",
              colorBorder: "#ffffff",
            },
          },
        }}
      >
        <div>
          <span className="logo">
            <img src={logo} alt="aliexpress" />
          </span>
          <span>
            <Link to="/favorites">
              <Button type="primary" className="button-favorites">
                <FaHeart size={30} color="white" />
              </Button>
            </Link>
          </span>
          <span>
            <Link to="/">
              <Button type="primary" className="catalog-main">
                <GiOpenBook />
                <p className="catalog-text">Каталог</p>
              </Button>
            </Link>
          </span>
          <span className="finder-main">
            <Input
              className="finder-input"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Поиск..."
            ></Input>
            <span className="favorites"></span>
          </span>
          <ul className="nav">
            <li>
              {isLoggedIn ? (
                <Link to="/order">
                  <Button type="primary" className="button-order">
                    <BsBoxSeam />
                    <p className="order-text">Заказы</p>
                  </Button>
                </Link>
              ) : (
                <Link to="/login">
                  <Button type="primary" className="button-login">
                    <BsBoxSeam />
                    <p className="order-text">Заказы</p>
                  </Button>
                </Link>
              )}
            </li>
            <li>
              <Link to="/cart">
                <Button type="primary" className="button-shop-cart">
                  <RiShoppingCart2Fill />
                  <span className="cart-lenght">
                    {cartItems.length === 0 ? "0" : cartItems.length}
                  </span>
                  <p className="shop-cart-text">Корзина</p>
                </Button>
              </Link>
            </li>
            <li>
              {isLoggedIn ? (
                <Button
                  type="primary"
                  onClick={() => {
                    setIsLoggedIn(false);
                  }}
                  className="button-logout"
                >
                  <VscAccount />
                  <p className="login-text">Выйти</p>
                </Button>
              ) : (
                <Link to="/login">
                  <Button type="primary" className="button-login">
                    <LuSmilePlus />
                    <p className="login-text">Войти</p>
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </ConfigProvider>
      {/* {isLoggedIn ? (
        <div className="login-user">Вы вошли как: {username}</div>
      ) : (
        <div></div>
      )} */}
    </header>
  );
}
