import { useEffect, useState } from "react";
import axios from "axios";
import cookie from "js-cookie";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Expenses from "@/components/Expenses/Expenses";

export default function Home() {
  const [expenses, setExpenses] = useState<Array<any> | null>(null);

  const fetchExpenses = async () => {
    const headers = {
      authorization: cookie.get("jwt_token"),
    };

    const response = await axios.get("http://localhost:3001/expenses", {
      headers,
    });
    setExpenses(response.data.expenses);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <>
      <Header />
      <Expenses expenses={expenses} />
      <Footer />
    </>
  );
}
