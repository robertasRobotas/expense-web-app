import React from "react";

type ButtonType = {
  onClick: () => void;
  isLoading: boolean;
  text: string;
  className?: string;
};

const Button: React.FC<ButtonType> = ({
  onClick,
  isLoading,
  text,
  className,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {!isLoading ? <>{text}</> : <>Loading...</>}
    </button>
  );
};

export default Button;
