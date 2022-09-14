import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";

const Input = () => {
  return (
    <>
      <input
        className="py-2 px-4 w-full outline-none"
        type="number"
        maxLength={3}
      />
      <RiErrorWarningLine className="absolute text-2xl right-10" />
    </>
  );
};

export default Input;
