import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

type ExpenseType = {
  _id: string;
  title: string;
  type: string;
  amount: number;
  description: number;
  photo_url: string;
  owner_id: string;
};

type ExpenseComponentType = {
  expense: ExpenseType;
};

const Expense: React.FC<ExpenseComponentType> = ({ expense }) => {
  return (
    <Link className={styles.link} href={`/expense/${expense._id}`}>
      <div className={styles.wrapper}>
        <img className={styles.photo} src={expense.photo_url} />
        <div className={styles.cardTextContents}>
          <div>{expense.title}</div>
          <div className={styles.amount}>
            {expense.amount}
            <span className={styles.eurSign}>€</span>
          </div>
          <div className={styles.type}>{expense.type}</div>
        </div>
      </div>
    </Link>
  );
};

export default Expense;
