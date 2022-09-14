import React from "react";

const RightSection = () => {
  return (
    <div className="w-[45%] bg-gray-50">
      <header className="border border-dashed border-b-gray-400 p-4">
        <h1 className="font-bold text-xl">Summary</h1>
        <p className="text-gray-400 text-[12px]">
          Select from one of the available Units to proceed
        </p>
        <div className="my-3">
          <p className="flex justify-between text-gray-500 py-1 text-sm">
            Unit number <span className="font-bold">Gardenia,B 505</span>{" "}
          </p>
          <p className="flex justify-between text-gray-500 py-1 text-sm">
            Super Built up Area<span className="font-bold">1058.7 Sq.Ft</span>{" "}
          </p>
          <p className="flex justify-between text-gray-500 py-1 text-sm">
            Base Price Per Sqft <span className="font-bold">₹5,747</span>{" "}
          </p>
          <p className="flex justify-between text-gray-500 py-1 text-sm">
            Total value of property{" "}
            <span className="font-bold">₹59,47,382</span>{" "}
          </p>
          <p className="flex justify-between text-gray-500 py-1 text-sm">
            GST <span className="font-bold">₹2,97,369</span>{" "}
          </p>
          <p className="flex justify-between text-gray-500 py-1 text-sm">
            Agreement Value <span className="font-bold">₹62,44,751</span>{" "}
          </p>
          <p className="flex justify-between text-gray-500 py-1 text-sm">
            Additional & Deposits <span className="font-bold">₹1,93,523</span>{" "}
          </p>
        </div>
      </header>
      <main className="p-4">
        <p className="flex justify-between py-1 text-sm">
          Discount per Sqft <span className="font-bold">-₹150</span>{" "}
        </p>
        <p className="flex justify-between py-1 text-sm">
          Net Discount <span className="font-bold">-₹9,00,000</span>{" "}
        </p>
        <p className="flex justify-between py-1 text-sm">
          Discount GST <span className="font-bold">-₹67,500</span>{" "}
        </p>
      </main>
      <footer className="flex items-center justify-between bg-gray-200 p-4">
        <div>
          <h2 className="font-bold">All inclusive Total</h2>
          <p className="text-[12px]">10% Lower than Before</p>
        </div>
        <h1 className="text-xl font-bold">₹64,38,274</h1>
      </footer>
    </div>
  );
};

export default RightSection;
