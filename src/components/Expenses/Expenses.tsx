import React from "react";
import styles from "./styles.module.css";
import Expense from "../Expense/Expense";

type ExpensesType = {
  expenses: Array<any> | null;
};

const Expenses: React.FC<ExpensesType> = ({ expenses }) => {
  return (
    <div className={styles.wrapper}>
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
