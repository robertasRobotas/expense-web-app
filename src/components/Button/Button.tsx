import React from "react";

type ButtonType = {
  onClick: () => void;
  isLoading: boolean;
  text: string;
};

const Button: React.FC<ButtonType> = ({ onClick, isLoading, text }) => {
  return (
    <button onClick={onClick}>
      {!isLoading ? <>{text}</> : <>Loading...</>}
    </button>
  );
};

export default Button;
