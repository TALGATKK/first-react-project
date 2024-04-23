import React from "react";
import Container from "./Container/Container";
import Item from "./Item/Item";

export default function ProductList({
  list,
  handleAddProduct,
  handleAddFavorites,
  handleRemoveFavorites,
  search,
  sort,
  setFavorites,
  isFavorite,
}) {
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
              handleAddFavorites={handleAddFavorites}
              setFavorites={setFavorites}
              isFavorite={product.isFavorite}
              handleRemoveFavorites={handleRemoveFavorites}
            />
          ))}
      </Container>
    </div>
  );
}
