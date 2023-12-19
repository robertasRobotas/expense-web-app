import React from "react";
import styles from "./styles.module.css";
import Expense from "../Expense/Expense";
import Link from "next/link";

type ExpensesType = {
  expenses: Array<any> | null;
};

const Expenses: React.FC<ExpensesType> = ({ expenses }) => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.statisticsTitle} href="/statistics">
        See statistics of last 30 days
      </Link>

      {expenses &&
        expenses.map((expense) => (
          <div key={expense._id}>
            <Expense expense={expense} />
          </div>
        ))}
    </div>
  );
};

export default Expenses;
