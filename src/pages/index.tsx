import { useEffect, useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";

import Expenses from "@/components/Expenses/Expenses";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const [expenses, setExpenses] = useState<Array<any> | null>(null);

  const fetchExpenses = async () => {
    try {
      const headers = {
        authorization: cookie.get("jwt_token"),
      };

      const response = await axios.get(`${process.env.SERVER_URL}/expenses`, {
        headers,
      });
      setExpenses(response.data.expenses);
    } catch (err) {
      // @ts-ignore
      if (err.response.status === 401) {
        router.push("/login");
      }
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <>
      <PageTemplate>
        <Expenses expenses={expenses} />
      </PageTemplate>
    </>
  );
}
