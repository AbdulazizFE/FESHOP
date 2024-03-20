import styles from "./page.module.css";
import Image from "next/image";
import Hero from "/public/images/icons/hero.svg";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>What is Lorem Ipsum?</h1>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <button className={styles.button}>Click</button>
      </div>

      <div className={styles.col}>
        <Image className={styles.img} src={Hero} alt="Hexashop hreo" />
      </div>
    </div>
  );
}
