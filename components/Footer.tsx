import styles from "@/components/Footer.module.css";
import logo from "@/resources/fullLogo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src={logo} alt="big logo" width={313} height={222} />
        </div>
        <div className={styles.shop}>
          <ul className={styles.links}>
            <Link href="/store/tshirts">
              <li>T-Shirts</li>
            </Link>
            <Link href="/store/wallets">
              <li>Wallets</li>
            </Link>
          </ul>
        </div>
        <div className={styles.company}>
          <ul className={styles.links}>
            <Link href="/about">
              <li>Our Story</li>
            </Link>
            <Link href="/shippingandreturns">
              <li>Shipping and Returns</li>
            </Link>
            <Link href="/privacypolicy">
              <li>Privacy Policy</li>
            </Link>
            <Link href="https://www.kalarric.art/" target="_blank">
              <li>Design @ Kalarric</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className={styles.credit}>
        <div>&copy; 2022-23 Kalarric Lifestyle</div>
      </div>
    </div>
  );
};

export default Footer;
