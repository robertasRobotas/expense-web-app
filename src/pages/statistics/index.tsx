import { useEffect, useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";

import PageTemplate from "@/components/PageTemplate/PageTemplate";

import styles from "./styles.module.css";
import Labels from "@/components/Labels/Labels";
import Pie from "@/components/Pie/Pie";

export default function Home() {
  const router = useRouter();

  const [statistics, setStatistics] = useState<Array<any> | null>(null);

  const fetchExpenses = async () => {
    try {
      const headers = {
        authorization: cookie.get("jwt_token"),
      };

      const response = await axios.get(
        `${process.env.SERVER_URL}/expenses/statistics`,
        {
          headers,
        }
      );

      setStatistics(response.data.expenses);
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

  const colors = [
    "#4287f5",
    "#f06e3e",
    "#7bde3a",
    "#b933de",
    "#e63247",
    "#59c29f",
    "#aec21b",
  ];

  return (
    <>
      <PageTemplate>
        <h2 className={styles.title}>statistics</h2>
        <Labels statistics={statistics} colors={colors} />
        <Pie statistics={statistics} colors={colors} />
      </PageTemplate>
    </>
  );
}
