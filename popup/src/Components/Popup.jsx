import React from "react";
import { IoMdClose } from "react-icons/io";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Popup = ({ setOpen }) => {
  return (
    <>
      <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] w-screen h-screen grid place-content-center z-10">
        <div className="bg-[#fff] p-[2rem] rounded-lg w-[50rem]">
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-bold text-2xl">
              Add Discount for Garrick's query
            </h1>
            <span>
              <IoMdClose
                className="text-3xl cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </span>
          </div>
          <p className="text-gray-400 w-[80%] text-sm">
            Choose the discount you want to apply for this query, You will see
            the final cost reflected on the Summary being showed taking into
            account the discount you enter
          </p>

          <div className="flex gap-4 justify-between pt-6">
            <LeftSection />
            <RightSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
