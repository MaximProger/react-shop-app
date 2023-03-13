import React from "react";
import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "../store/dummyjson/dummyjson.api";
import { IProduct } from "../models/models";

const ProductsList = () => {
  const { isLoading, isError, data: prodcuts } = useGetProductsQuery();

  return (
    <>
      <h1 className="font-bold text-2xl mb-5">Товары</h1>

      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {prodcuts?.map((product: IProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
