import React from "react";
import styles from "./styles.module.css";
import { PieChart } from "react-minimal-pie-chart";

type PieType = {
  statistics: any;
  colors: string[];
};

const Pie: React.FC<PieType> = ({ statistics, colors }) => {
  return (
    <div className={styles.pieWrapper}>
      <PieChart
        label={({ dataEntry }) => `${dataEntry.value} €`}
        data={
          statistics?.map((expense: any, idx: number) => {
            return {
              title: expense._id,
              value: expense.totalAmount,
              color: colors[idx],
            };
          })!
        }
        labelStyle={{
          fontSize: "5px",
          fill: "black",
        }}
      />
    </div>
  );
};

export default Pie;
