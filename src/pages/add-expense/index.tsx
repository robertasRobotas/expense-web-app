import React, { useState } from "react";
import styles from "./styles.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import axios from "axios";
import { useRouter } from "next/router";
import Button from "@/components/Button/Button";
import cookie from "js-cookie";
import PageTemplate from "@/components/PageTemplate/PageTemplate";

const AddExpense = () => {
  const [isLoading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState<number>();
  const [description, setDescription] = useState("");

  const router = useRouter();

  const onAddExpense = async () => {
    try {
      // const textPattern = /.{5,}/;

      // if (!textPattern.test(title)) {
      //   return;
      // }

      setLoading(true);

      const body = {
        title: title,
        type: type,
        amount: amount,
        description: description,
      };

      console.log(body);

      const headers = {
        authorization: cookie.get("jwt_token"),
      };

      const response = await axios.post(
        `${process.env.SERVER_URL}/expenses`,
        body,
        {
          headers,
        }
      );

      setLoading(false);

      if (response.status === 201) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <PageTemplate>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Add Expense</h1>

        <div className={styles.form}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
          />

          <select
            id="select-input"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Select type</option>
            <option value="housing">Housing</option>
            <option value="transportation">Transportation</option>
            <option value="groceries">Food and Groceries</option>
            <option value="leisure">Leisure</option>
            <option value="health">Health</option>
            <option value="services">Services & Subscriptions</option>
            <option value="investment">Investment</option>
          </select>

          <input
            value={amount || ""}
            type="number"
            onChange={(e) => {
              console.log(e.target.value);

              const number = Number(e.target.value);

              setAmount(number);
            }}
            placeholder="amount (12,56)"
          />

          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description"
          />

          <Button
            className={styles.button}
            text="Add"
            onClick={onAddExpense}
            isLoading={isLoading}
          />
        </div>
      </div>
    </PageTemplate>
  );
};

export default AddExpense;
