import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import cookie from "js-cookie";

import styles from "./styles.module.css";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";

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
  const [isShowConfirmModal, setShowConfirmModal] = useState(false);

  const router = useRouter();

  const fetchExpense = async (id: string) => {
    const headers = {
      authorization: cookie.get("jwt_token"),
    };

    const expense = await axios.get(
      `${process.env.SERVER_URL}/expenses/${id}`,
      {
        headers,
      }
    );
    setExpense(expense.data.expense);
  };

  useEffect(() => {
    router.query.id && fetchExpense(router.query.id as string);
  }, [router.query.id]);

  const onDeleteExpense = async () => {
    const headers = {
      authorization: cookie.get("jwt_token"),
    };

    const response = await axios.delete(
      `${process.env.SERVER_URL}/expenses/${router.query.id}`,
      {
        headers,
      }
    );

    if (response.status === 200) {
      router.push("/");
    }

    console.log(response);
  };

  return (
    <PageTemplate>
      <>
        {/* reiktu mest i atskita komponenta */}
        {expense && (
          <div className={styles.expense}>
            <h1 className={styles.title}>{expense.title}</h1>
            <div className={styles.amount}>{expense.amount}$</div>
            <p className={styles.description}>{expense.description}</p>
            <div className={styles.type}>{expense.type}</div>
            <img className={styles.photo} src={expense.photo_url} />

            <Button
              className={styles.deleteButton}
              text="Delete Expense"
              onClick={() => setShowConfirmModal(true)}
              isLoading={false}
            />
          </div>
        )}

        {isShowConfirmModal && (
          <Modal
            onConfirm={onDeleteExpense}
            onCancel={() => setShowConfirmModal(false)}
          />
        )}
      </>
    </PageTemplate>
  );
};

export default Expense;
