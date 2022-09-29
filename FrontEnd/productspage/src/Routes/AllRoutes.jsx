import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "./CartPage";
import ProductsPage from "./ProductsPage";
import SinglePage from "./SinglePage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/:id" element={<SinglePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
