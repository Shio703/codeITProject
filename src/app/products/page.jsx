import React, { Suspense } from "react";
import styles from "./page.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";

const ProductPage = async () => {
  "use cache";

  // სერვერის მხარეს fetching:
  const products = await fetch("https://fakestoreapi.com/products");
  const parsedData = await products.json();

  // console.log(parsedData[0]);

  //client-ის მხარის fetching:
  // const [products, setProducts] = useState(null);

  // const getData = async () => {
  //   const data = await fetch("https://fakestoreapi.com/products");
  //   const parsedData = await data.json();
  //   setProducts(parsedData);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <main className={styles.mainCont}>
      <h1>Product List:</h1>
      <div className={styles.productListCont}>
        {parsedData?.map((product, index, array) => {
          return (
            <ProductCard
              key={product.id}
              title={product.title}
              id={product.id}
              imageUrl={product.image}
              price={product.price}
            />
          );
        })}
      </div>
    </main>
  );
};

export default ProductPage;
