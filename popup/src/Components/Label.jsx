import React from "react";

const Label = ({ id, value }) => {
  return (
    <>
      <label
        className="text-[11px] mt-4 inline-block text-gray-300 pl-6"
        htmlFor={id}
      >
        {value}
      </label>
    </>
  );
};

export default Label;
