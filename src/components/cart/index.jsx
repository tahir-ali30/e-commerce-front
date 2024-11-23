import { Icon } from "@iconify-icon/react/dist/iconify.js";
import React from "react";
import { useDispatch } from "react-redux";
import { closeCartModal } from "../../store/modals/slice";

function Cart() {
  const dispatcher = useDispatch();

  return (
    <div className="fixed inset-0 z-10 grid grid-cols-[1fr,450px] max-h-screen h-screen overflow-y-scroll overscroll-none">
      <div className="bg-black-500/70 w-full"></div>
      <div className="w-full h-full bg-white relative">
        <header className="w-full flex justify-between items-center p-2 px-4 bg-main text-xl text-white">
          <span className="p-1.5">Cart</span>
          <button
            onClick={() => dispatcher(closeCartModal())}
            className="flex justify-center items-center hover:bg-slate-50/25 rounded-full p-1.5"
          >
            <Icon icon={"bitcoin-icons:cross-filled"} />
          </button>
        </header>
        <div className="grid gap-4 p-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="w-full h-20 rounded-md bg-slate-100"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
