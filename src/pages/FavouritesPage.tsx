import ProductCard from "../components/ProductCard";
import { useAppSelector } from "../hooks/redux";
import { useGetProductsQuery } from "../store/dummyjson/dummyjson.api";

const FavouritesPage = () => {
  const { isLoading, isError, data: prodcuts } = useGetProductsQuery();
  const { favourites } = useAppSelector((state) => state.dummyjson);
  const favouritesProducts = prodcuts?.filter((product) =>
    favourites.includes(product.id)
  );

  if (favourites.length === 0)
    return (
      <h1 className="font-bold text-2xl mb-5 text-center">
        В избранном нет товаров
      </h1>
    );

  return (
    <>
      <h1 className="font-bold text-2xl mb-5">Избранные товары</h1>

      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {favouritesProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default FavouritesPage;
