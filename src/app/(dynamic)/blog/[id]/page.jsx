import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const product = await getData(params.id);
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function Product({ params }) {
  const product = await getData(params.id);

  return (
    <div className={styles.container}>
      <Link href="/blog"> {`<Back`} </Link>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>Abbe</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={product.thumbnail}
            alt={product.title}
            fill={true}
          />
          <span className={styles.category}>{product.category}</span>
          <span className={styles.price}>{product.price}$</span>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.gallery}>
          {product.images.map((image) => (
            <Image
              key={product.id}
              className={styles.image}
              src={image}
              alt={product.title}
              width={200}
              height={200}
            />
          ))}
        </div>
        <p className={styles.text}>{product.description}</p>
      </div>
    </div>
  );
}
