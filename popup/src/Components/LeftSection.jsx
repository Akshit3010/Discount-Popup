import React from "react";
import Label from "./Label";
import { BiRupee } from "react-icons/bi";
import Input from "./Input";

const LeftSection = () => {
  return (
    <div className="w-[45%] py-4">
      <h1 className="font-bold text-xl">Enter Discount</h1>
      <p className="text-gray-400 text-[12px]">
        Select from one of the available Discounting Modes
      </p>

      <form>
        <Label id="mode" value="Discount Mode" />
        <br />
        <select
          name="mode"
          id="mode"
          className="border border-gray-400 rounded-sm px-4 py-2 w-full outline-none"
          required
        >
          <option value="new">Set New Base Price</option>
          <option value="percent">Percent of Base Price</option>
          <option value="rupees">Rupees From Base Price</option>
        </select>
        <br />
        <Label id="amount" value="Discount Amount" />
        <br />
        <div className="flex items-center border border-gray-400 rounded-sm relative">
          <span className="bg-gray-200 border-r-gray-400 p-3">
            <BiRupee />
          </span>
          <Input />
        </div>
        <Label id="net" value="Net Applicable Discount" />
        <br />
        <div className="flex items-center border border-gray-400 rounded-sm relative">
          <span className="bg-gray-200 border-r-gray-400 p-3">
            <BiRupee />
          </span>
          <Input />
        </div>
        <br />
        <p className="text-[12px] text-gray-600 mb-6">
          By clicking Apply Discount you are making updates to the cost sheet
          that the user can view. Confirm discount on the Summary on the right
          before clicking on Apply Discount
        </p>
        <input
          type="submit"
          value="Apply Discount"
          className="w-full bg-slate-700 p-3 rounded-md text-white cursor-pointer font-bold"
        />
        <button className="w-full mt-4 font-bold rounded-md cursor-pointer">
          Download Cost Sheet
        </button>
      </form>
    </div>
  );
};

export default LeftSection;
