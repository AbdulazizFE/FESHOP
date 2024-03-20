import Link from "next/link";
import styles from "./Navbar.module.css";
import { links } from "./data";
import Button from "../Button/Button";
import { Montserrat } from "next/font/google";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
const LogoFont = Montserrat({ subsets: ["latin"], weight: ["400"] });
export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={`${styles.logo}  ${LogoFont.className}`}>
        LOREM
      </Link>
      <div className={styles.links}>
        <DarkModeToggle/>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <Button />
      </div>
    </div>
  );
}
