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
  const [photo, setPhoto] = useState("");

  const router = useRouter();

  const onAddExpense = async () => {
    try {
      const textPattern = /.{5,}/;

      if (!textPattern.test(title)) {
        return;
      }

      console.log("hitttt");
      setLoading(true);

      const body = {
        title: title,
        type: type,
        amount: amount,
        description: description,
        photo_url: photo,
      };

      const headers = {
        authorization: cookie.get("jwt_token"),
      };

      console.log("hitttt2");

      const response = await axios.post(
        `${process.env.SERVER_URL}/expenses`,
        body,
        {
          headers,
        }
      );

      console.log("hitttt3");
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

          <input
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="type"
          />

          <input
            value={amount}
            type="number"
            onChange={(e) => {
              const number = Number(e.target.value);

              setAmount(number);
            }}
            placeholder="amount"
          />

          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description"
          />

          <input
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder="photo"
          />

          <Button
            text="Add Expense"
            onClick={onAddExpense}
            isLoading={isLoading}
          />
        </div>
      </div>
    </PageTemplate>
  );
};

export default AddExpense;
