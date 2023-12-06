import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Expenses from "@/components/Expenses/Expenses";

export default function Home() {
  const [expenses, setExpenses] = useState<Array<any> | null>(null);

  const fetchExpenses = async () => {
    const response = await axios.get("http://localhost:3001/expenses");
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
