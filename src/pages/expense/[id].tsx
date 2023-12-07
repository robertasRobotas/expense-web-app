import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./styles.module.css";

type ExpenseType = {
  _id: string;
  title: string;
  type: string;
  amount: number;
  description: string;
  photo_url: string;
  owner_id: string;
};

const Expense = () => {
  const [expense, setExpense] = useState<ExpenseType | null>(null);

  const router = useRouter();

  const fetchExpense = async (id: string) => {
    const expense = await axios.get(`http://localhost:3001/expenses/${id}`);
    setExpense(expense.data.expense);
  };

  useEffect(() => {
    router.query.id && fetchExpense(router.query.id as string);
  }, [router.query.id]);

  return (
    <div>
      <Header />

      {/* reiktu mest i atskita komponenta */}
      {expense && (
        <div className={styles.expense}>
          <h1 className={styles.title}>{expense.title}</h1>
          <div className={styles.amount}>{expense.amount}$</div>
          <p className={styles.description}>{expense.description}</p>
          <div className={styles.type}>{expense.type}</div>
          <img className={styles.photo} src={expense.photo_url} />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Expense;
