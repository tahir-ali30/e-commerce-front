import React, { useState } from "react";
import Profile from "./Profile";
import Address from "./Address";
import Password from "./Password";

function Account() {
  const [activeTab, setActiveTab] = useState("information");
  return (
    <>
      <div>
        <div className="border-b pb-3 px-4 mb-8">
          <span className="font-semibold">Your Account</span>
        </div>
        <div className="grid grid-cols-2 items-center gap-x-10 gap-y-5">
          {[
            "Information",
            "Address",
            "Password",
            "Order history and details",
          ].map((item, index) => (
            <div
              className={`rounded-md text-center grow transition-all duration-200 ease-in ${
                item.toLowerCase() === activeTab
                  ? "bg-main text-white"
                  : "bg-slate-200"
              }`}
              key={`${item}-${index}`}
            >
              <button
                onClick={() => setActiveTab(item.toLowerCase())}
                className="w-full p-4 font-semibold"
              >
                {item}
              </button>
            </div>
          ))}
        </div>
        {activeTab === "information" && <Profile />}
        {activeTab === "address" && <Address />}
        {activeTab === "password" && <Password />}
      </div>
    </>
  );
}

export default Account;
