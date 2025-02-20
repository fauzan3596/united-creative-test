import React from "react";

const Button = ({ text }) => {
  return (
    <button className="btn btn-sign group">
      <span className="btn-bg"></span>
      <span className="relative text-white">{text}</span>
    </button>
  );
};

export default Button;
