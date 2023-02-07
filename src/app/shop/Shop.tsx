import axios from "axios";
import { FC, useState, useEffect, SetStateAction } from "react";

import ProductModal from "./components/ProductModal";
import Button from "../../components/Button";
import Posts from "./components/Posts";
import Header from "../../components/Header";
import Hero from "../../components/Hero";

import { ProductType } from "../../components/Product/constants";

import styles from "./Shop.module.css";
import { FavType } from "./constants";

const Shop: FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [favs, setFavs] = useState<FavType[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const getProducts = async () => {
    // Using axios and async instead of fetch and promises to get products
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      const reversed = data.reverse();
      setProducts(reversed);
    } catch (e: any) {
      console.log("getProducts Error", e.response.data);
    }
  };

  useEffect(() => {
    // Will be called once when component is mounted
    getProducts();
  }, []);

  const favClick = (id: number | undefined) => {
    // We are using the ID instead of the title here cause the ID is unique and won't cause any unpredictable behaviour
    // We are using the array length to count favs instead of manually incrementing and decrementing
    const idx = products.find((i: ProductType) => i.id == id);

    const isAlreadyFav = favs.some((i: ProductType) => i.id === id);

    // We are checking if the item is already in the favorites list and handling it accordingly
    if (isAlreadyFav) {
      // Filters all the favorites and removes the item selected
      // We are cloning the state instead of updating it directly to trigger a re-render and update the data in real-time
      const clonedFavs = [...favs];
      const updatedFavs = clonedFavs.filter((i: ProductType) => i.id != id);
      setFavs(updatedFavs);

      return;
    }

    setFavs((prev: any) => [...prev, idx]);
  };

  const onSubmit = async (payload: FavType) => {
    setLoading(true);

    const updated = [...products];

    // Using unshift instead of push in order to add the item at the start of the array
    updated.unshift(payload);

    setProducts(updated);
    setModalOpen(false);

    try {
      const { data } = await axios.post("https://fakestoreapi.com/products", {
        payload,
      });
    } catch (e: any) {
      console.log("onSubmit Error", e.response.data);
    }

    setLoading(false);
  };

  return (
    <div data-test="shopContainer">
      <Header />
      <Hero />

      <div className={`container ${styles.main}`} style={{ paddingTop: 0 }}>
        <div className={styles.buttonWrapper}>
          <span role="button">
            <Button onClick={() => setModalOpen(true)}>
              Send product proposal
            </Button>
          </span>

          {isLoading && (
            <div className={styles.messageContainer}>
              <i>Adding product...</i>
            </div>
          )}
        </div>

        <div className={styles.statsContainer}>
          <span>Total products: {products?.length}</span>
          {" - "}
          <span>Number of favorites: {favs.length}</span>
        </div>

        {products && !!products.length && (
          <Posts products={products} favs={favs} onFav={favClick} />
        )}
      </div>

      <>
        <ProductModal
          isModalOpen={isModalOpen}
          setModalOpen={setModalOpen}
          onSubmit={onSubmit}
        />
      </>
    </div>
  );
};

export default Shop;
