"use client";
import React from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductCard = ({ title, id, imageUrl, price }) => {
  const router = useRouter();

  return (
    <div
      className={styles.productCard}
      onClick={() => router.push(`/products/${id}`)}
    >
      <Image
        src={imageUrl}
        alt="Product Image"
        width={250}
        height={300}
        loading="eager"
        className={styles.productImage}
      />
      <div className={styles.infoCont}>
        <h3>{title}</h3>
        <span>{price + "$"}</span>
      </div>
    </div>
  );
};

export default ProductCard;
