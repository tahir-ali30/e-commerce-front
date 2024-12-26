import { Icon } from "@iconify-icon/react/dist/iconify.js";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeCartModal } from "../../store/modals/slice";
import ProductCard from "./productCard";

function Cart() {
  const dispatcher = useDispatch();
  const { cartModal } = useSelector((state) => state.modals);
  function closeCart() {
    dispatcher(closeCartModal());
    document.body.style.overflow = "auto";
  }

  return (
    <div
      className={`fixed inset-0 z-10 grid grid-cols-[1fr,450px] transition-all duration-500 ease-in-out ${
        cartModal ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="bg-black/70 w-full"></div>
      <div className="w-full h-full bg-white relative">
        <header className="w-full flex justify-between items-center p-2 px-4 bg-main text-xl text-white">
          <span className="p-1.5">Cart</span>
          <button
            onClick={closeCart}
            className="flex justify-center items-center hover:bg-slate-50/25 rounded-full p-1.5"
          >
            <Icon icon={"bitcoin-icons:cross-filled"} />
          </button>
        </header>
        <div className="grid gap-4 p-2">
          {Array.from({ length: 4 }).map((_, index) => (
            // <div className="w-full h-20 rounded-md bg-slate-100"></div>
            <ProductCard />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
