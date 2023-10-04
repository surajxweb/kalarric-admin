"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Sidebar.module.css";
import Image from "next/image";
import logo from "@/resources/biglogo.png";
import { UserButton } from "@clerk/nextjs";
import { BsBagCheckFill } from "react-icons/bs";
import { FaTshirt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image src={logo} height={400} width={400} alt="logo" />
        </div>
        <div className={styles.user}>
          <UserButton />
        </div>
      </div>
      <ul className={styles.section}>
        <li className={styles.sectionHeading}>
          {" "}
          <AiFillHome /> Home
        </li>
      </ul>
      <div className={styles.sectionHeading}>
        {" "}
        <BsBagCheckFill /> Orders
      </div>
      <ul className={styles.section}>
        <Link href={"/orders"}>
          <li>All Orders</li>
        </Link>
        <Link href={"/orders/pending"}>
          <li>Pending Orders</li>
        </Link>
        <Link href={"/order/id"}>
          <li>Find Orders by Order ID</li>
        </Link>
        <Link href={"/order/user"}>
          <li>Find Orders by User</li>
        </Link>
      </ul>

      <div className={styles.sectionHeading}>
        <FaUser /> Users
      </div>
      <ul className={styles.section}>
        <Link href={"/users"}>
          <li>All Users</li>
        </Link>
        <Link href={"/users/paid"}>
          <li>Paid Users</li>
        </Link>
        <Link href={"/users/email"}>
          <li>Find Users by Email ID</li>
        </Link>
      </ul>
      <div className={styles.sectionHeading}>
        <FaTshirt /> Products
      </div>
      <ul className={styles.section}>
        <Link href={"/products"}>
          <li>All Products</li>
        </Link>
        <Link href={"/products/our-of-stock"}>
          <li>Out of stock Products</li>
        </Link>
        <Link href={"/products/collection"}>
          <li>Find products by Collection</li>
        </Link>
        <Link href={"/products/category"}>
          <li>Find products by Category</li>
        </Link>
        <Link href={"/products/sku"}>
          <li>Find products by SKU</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
