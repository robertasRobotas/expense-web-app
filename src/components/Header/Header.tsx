import React from "react";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>Expense App</div>
      <nav>links</nav>
    </div>
  );
};

export default Header;
