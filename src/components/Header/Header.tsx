import React, { useEffect, useState } from "react";
import cookie from "js-cookie";

import styles from "./styles.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const savedCookie = cookie.get("jwt_token");

    if (savedCookie) {
      setUserLoggedIn(true);
    }
  }, []);

  const router = useRouter();

  const onLogout = () => {
    cookie.remove("jwt_token");
    router.push("/login");
  };

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

        {isUserLoggedIn && (
          <li>
            <button onClick={onLogout}>Log out</button>
          </li>
        )}
      </nav>
    </div>
  );
};

export default Header;
