import styles from "@/components/Navbar.module.css";
import logo from "@/resources/biglogo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={logo} height={400} width={400} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
