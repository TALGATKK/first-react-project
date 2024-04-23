import React from "react";
import { CatalogFilter } from "../components/CatalogFilter/CatalogFilter";
import ProductList from "../components/ProductList";

export default function Favorites({
  setFavorites,
  list,
  search,
  sort,
  handleAddFavorites,
  handleAddProduct,
  handleRemoveFavorites,
}) {
  return (
    <div>
      <CatalogFilter />
      <ProductList
        list={list}
        search={search}
        sort={sort}
        setFavorites={setFavorites}
        handleAddFavorites={handleAddFavorites}
        handleAddProduct={handleAddProduct}
        handleRemoveFavorites={handleRemoveFavorites}
      />
    </div>
  );
}
