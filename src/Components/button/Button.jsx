import React from "react";

const Button = ({ text, bgColor, Color }) => {
  return (
    <div>
      <button className={`${bgColor} ${Color} px-5 py-1.5`}>{text}</button>
    </div>
  );
};

export default Button;
