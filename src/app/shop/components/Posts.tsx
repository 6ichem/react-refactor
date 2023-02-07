import { ReactNode, FC } from "react";

import Product from "../../../components/Product";
import { ProductType } from "../../../components/Product/constants";

// Extending our props to get the default HTML element prop types
interface Props {
  products: ProductType[];
  onFav: (id: number | undefined) => void;
  favs: ProductType[];
}

const Posts: FC<Props> = ({ products, favs, onFav, ...rest }) => {
  const isFavorite = (id: number | undefined) => {
    return favs.some((i: ProductType) => i.id === id);
  };

  return (
    <div {...rest}>
      {products.map((i: ProductType, idx: number) => (
        <Product
          key={idx}
          product={i}
          isFavorite={isFavorite(i.id)}
          onFav={onFav}
        />
      ))}
    </div>
  );
};

export default Posts;
