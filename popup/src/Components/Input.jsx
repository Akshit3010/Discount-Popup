import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";

const Input = ({ id, onChange }) => {
  return (
    <>
      <input
        id={id}
        onChange={onChange}
        className="py-2 px-4 w-full outline-none"
        type="number"
        maxLength={3}
      />
      <RiErrorWarningLine className="absolute text-2xl right-10" />
    </>
  );
};

export default Input;
