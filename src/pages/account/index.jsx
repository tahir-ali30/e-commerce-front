import React, { useState } from "react";
import Profile from "./Profile";
import Address from "./Address";
import Password from "./Password";

function Account() {
  const [activeTab, setActiveTab] = useState("Information");
  return (
    <>
      <div>
        <div className="border-b pb-3 px-4 mb-8">
          <span className="font-semibold">Your Account - {activeTab}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[350px,1fr] items-center gap-x-10 gap-y-5">
          <div className="grid gap-4">
            {[
              "Information",
              "Address",
              "Password",
              "Order history and details",
            ].map((item, index) => (
              <div
                className={`rounded-md text-center grow transition-all duration-200 ease-in ${
                  item === activeTab ? "bg-main text-white" : "bg-slate-200"
                }`}
                key={`${item}-${index}`}
              >
                <button
                  onClick={() => setActiveTab(item)}
                  className="w-full p-4 font-semibold"
                >
                  {item}
                </button>
              </div>
            ))}
          </div>
          {activeTab === "Information" && <Profile />}
          {activeTab === "Address" && <Address />}
          {activeTab === "Password" && <Password />}
        </div>
      </div>
    </>
  );
}

export default Account;
