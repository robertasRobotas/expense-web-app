import React from "react";
import styles from "./styles.module.css";

type LabelsType = {
  statistics: any;
  colors: string[];
};

const Labels: React.FC<LabelsType> = ({ statistics, colors }) => {
  return (
    <div className={styles.labels}>
      {statistics?.map((expense: any, idx: number) => (
        <div key={expense._id} className={styles.label}>
          <div>{expense._id}</div>
          <div
            style={{ background: `${colors[idx]}` }}
            className={styles.color}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Labels;
