import { FC } from "react";
import styles from "./Product.module.css";
import { FaStar } from "react-icons/fa";
import { ProductType } from "./constants";

// Extending our props to get the default HTML element prop types
interface Props {
  product: ProductType;
  isFavorite: boolean;
  onFav: (id: number | undefined) => void;
}

const Product: FC<Props> = ({ product, isFavorite, onFav, ...rest }) => {
  return (
    <span
      className={styles.product}
      style={{
        display: "inline-block",
        overflowX: "scroll",
        float: "none",
        clear: "both",
      }}
      {...rest}
    >
      <span className={styles["product-title"]} style={{ overflowX: "hidden" }}>
        {product.title}
      </span>

      <p>
        <strong>
          Rating: {product.rating ? `${product.rating.rate}/5` : ""}
        </strong>
      </p>

      <p>
        <b>Price: ${product.price}</b>
      </p>

      <p className={styles.productBody}>
        <span>
          <b>Description:</b>
        </span>
        <br />
        {product.description}
      </p>

      <span
        className={styles["action_bar"]}
        style={{ display: "table", width: "100%" }}
      >
        <span
          className={`${styles.actionBarItem} ${isFavorite ? "active" : ""}`}
          role="button"
          onClick={() => {
            onFav(product.id);
          }}
        >
          <FaStar />{" "}
          <span className={styles.actionBarItemLabel}>
            {isFavorite ? "Remove from favorites" : "Add to favorites"}
          </span>
        </span>
      </span>
    </span>
  );
};

export default Product;
