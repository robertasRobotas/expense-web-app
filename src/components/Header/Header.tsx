import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>Expense App</div>

      {/* Atskiras nav komponentas */}
      <nav className={styles.navbar}>
        <li>
          <Link className={styles.link} href="/add-expense">
            Add Expense
          </Link>
        </li>
      </nav>
    </div>
  );
};

export default Header;
