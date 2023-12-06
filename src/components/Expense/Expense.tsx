import React from "react";
import styles from "./styles.module.css";

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
    <div className={styles.wrapper}>
      <div>{expense.title}</div>
      <div>{expense.amount}</div>
      <div>{expense.type}</div>
      <img className={styles.photo} src={expense.photo_url} />
    </div>
  );
};

export default Expense;
