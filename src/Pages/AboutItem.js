import React from "react";
import { useParams } from "react-router-dom";
import { Button, ConfigProvider } from "antd";
import { ShoppingCartOutlined, DollarOutlined } from "@ant-design/icons";
import "./CSS/AboutItem.css";

export default function AboutItem({ products, handleAddProduct }) {
  const { id } = useParams();

  return (
    <div>
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
              src={products[id].image}
              alt={products[id].title}
              width="250"
              height="300"
            />
          </div>
          <div>
            <ul>
              <li>Описание: {products[id].description}</li>
              <li>Рейтинг товара: {products[id].rating}</li>
              <li>Цена: {products[id].price} $</li>
            </ul>
          </div>
          <div className="third-grid">
            <ul>
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
                  type="primary"
                  shape="round"
                  icon={<DollarOutlined />}
                  size="default"
                >
                  Купить
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
}
