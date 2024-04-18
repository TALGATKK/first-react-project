import React from "react";
import Container from "./Container/Container";
import Item from "./Item/Item";

export default function ProductList({ list, handleAddProduct, search, sort }) {
  return (
    <div className="productfilter">
      <Container>
        {list
          .sort((a, b) =>
            sort === "more"
              ? b.price - a.price
              : sort === "less"
              ? a.price - b.price
              : ""
          )
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(search);
          })
          .map((product) => (
            <Item
              id={product.id}
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating}
              count={product.count}
              sales={product.sold}
              product={product}
              handleAddProduct={handleAddProduct}
            />
          ))}
      </Container>
    </div>
  );
}
