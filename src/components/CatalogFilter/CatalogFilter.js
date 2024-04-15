import React from "react";
import "./CatalogFilter.css";

export function CatalogFilter({ setSort }) {
  return (
    <div className="filter">
      <span>Сортировка: </span>
      <span className="filter-select">
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">По умолчанию</option>
          <option value="less">Сначала дешевле</option>
          <option value="more">Сначала дороже</option>
        </select>
      </span>
    </div>
  );
}
