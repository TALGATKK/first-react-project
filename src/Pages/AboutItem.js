import React from "react";
import { useParams } from "react-router-dom";
import { Button, ConfigProvider, Rate } from "antd";
import { ShoppingCartOutlined, DollarOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { GoHeartFill } from "react-icons/go";
import "./CSS/AboutItem.css";

export default function AboutItem({
  products,
  handleAddProduct,
  handleAddOrderSingle,
  handleAddFavorites,
  handleRemoveFavorites,
}) {
  const { id } = useParams();
  const { isLoggedIn } = useContext(AuthContext);
  const SingleOrder = () => {
    isLoggedIn
      ? handleAddOrderSingle(products[id])
      : alert("Для заказа товара необходимо авторизоваться!");
  };
  return (
    <div className="wrapper">
      <ConfigProvider
        theme={{
          components: {
            Button: {
              paddingInline: 0,
              paddingBlock: 0,
              colorPrimary: "#dc3d3d",
              colorPrimaryActive: "#dc3d3d",
              colorPrimaryHover: "#BF240C",
              colorPrimaryBorder: "#ffffff",
              colorBorder: "#ffffff",
            },
          },
        }}
      >
        <h1>{products[id].title}</h1>
        <br />
        <div id="grid">
          <div>
            <img
              className="image-item"
              src={products[id].image}
              alt={products[id].title}
              width="250"
              height="300"
            />
          </div>
          <div className="details">
            <ul>
              <li>Описание: {products[id].description}</li>
              <li>
                Рейтинг товара:
                <Rate value={products[id].rating} />
              </li>
              <li>Цена: {products[id].price} $</li>
            </ul>
          </div>
          <div className="third-grid">
            <ul>
              <li>
                {products[id].isFavorite ? (
                  <span>
                    <button
                      onClick={() => handleRemoveFavorites(products[id])}
                      className="button-favorites-red"
                    >
                      <GoHeartFill size={30} />
                    </button>
                  </span>
                ) : (
                  <span>
                    <button
                      onClick={() => handleAddFavorites(products[id])}
                      className="button-favorites"
                    >
                      <GoHeartFill size={30} />
                    </button>
                  </span>
                )}
              </li>
              <li>
                <Button
                  onClick={() => handleAddProduct(products[id])}
                  type="primary"
                  shape="round"
                  icon={<ShoppingCartOutlined />}
                  size="default"
                >
                  В корзину
                </Button>
              </li>
              <li>
                <Button
                  onClick={SingleOrder}
                  type="primary"
                  shape="round"
                  icon={<DollarOutlined />}
                  size="default"
                >
                  Купить сразу
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
}
