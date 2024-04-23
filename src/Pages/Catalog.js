import React from "react";
import ProductList from "../components/ProductList";
import { CatalogFilter } from "../components/CatalogFilter/CatalogFilter";

export function Catalog({
  productsList,
  handleAddProduct,
  handleAddFavorites,
  search,
  sort,
  setFavorites,
  isFavorite,
  handleRemoveFavorites,
}) {
  return (
    <div>
      <CatalogFilter />
      <ProductList
        list={productsList}
        handleAddProduct={handleAddProduct}
        search={search}
        sort={sort}
        setFavorites={setFavorites}
        handleAddFavorites={handleAddFavorites}
        isFavorite={isFavorite}
        handleRemoveFavorites={handleRemoveFavorites}
      />
    </div>
  );
}
