import { useState } from "react";
import { IProduct } from "../models/models";
import { useAppSelector } from "../hooks/redux";
import { useAction } from "../hooks/actions";
import { ToastContainer, toast } from "react-toastify";

const ProductCard = ({ product }: { product: IProduct }) => {
  const { toggleFavourite } = useAction();
  const { favourites } = useAppSelector((state) => state.dummyjson);
  const [isFav, setIsFav] = useState(favourites.includes(product.id));

  const toggleToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    toggleFavourite(product.id);

    setIsFav(!isFav);
  };

  return (
    <div className="group relative">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full object-cover object-center group-hover:opacity-75 h-[280px]"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
      <button
        type="button"
        className={`favourite-btn absolute top-[8px] right-[8px] w-[24px] h-[24px] z-2 ${
          isFav && "favourite-btn--active"
        }`}
        onClick={toggleToFavourite}
      ></button>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ProductCard;
