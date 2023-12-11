import React from "react";

type ButtonType = {
  onAddExpense: () => void;
  isLoading: boolean;
};

const Button: React.FC<ButtonType> = ({ onAddExpense, isLoading }) => {
  return (
    <button onClick={onAddExpense}>
      {!isLoading ? <>Add Expense</> : <>Loading...</>}
    </button>
  );
};

export default Button;
