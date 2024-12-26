import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Loading from "../components/loading";
import Cart from "../components/cart";
import { ToastContainer } from "react-toastify";
import CartSidebar from "../components/cart/tailwindui";
import CartSidebarMix from "../components/cart/mix";
import CategorySideBar from "../components/category";

function Layout() {
  return (
    <>
      <ToastContainer autoClose={2000} />
      <Header />
      <Suspense fallback={<Loading />}>
        {/* <div
          className={`max-w-[92%] mx-auto py-5 ${
            cartModal ? "overflow-hidden" : "overflow-auto"
          }`}
        > */}
        <div className={`max-w-[92%] mx-auto py-5`}>
          <Outlet />
        </div>
      </Suspense>
      <Footer />
      {/* <Cart /> */}
      {/* <CartSidebar /> */}
      <CartSidebarMix />
      <CategorySideBar />
    </>
  );
}

export default Layout;
