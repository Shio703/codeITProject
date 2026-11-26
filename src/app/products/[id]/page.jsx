import { React } from "react";
import styles from "./page.module.css";
export const instant = false;

const ProductPage = async ({ params }) => {
  const { id } = await params;

  return (
    <main className={styles.mainCont}>
      <h1>ProductPage {id}</h1>
    </main>
  );
};

export default ProductPage;
