import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { useSelector } from "react-redux";

import Header from "../components/header";
import Footer from "../components/footer";
import Loading from "../components/loading";
import Cart from "../components/cart";

function Layout() {
  const { cartModal } = useSelector((state) => state.modals);
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <div
          className={`max-w-[92%] mx-auto py-5 overflow-hidden ${
            cartModal ? "fixed" : "static"
          }`}
        >
          <Outlet />
        </div>
      </Suspense>
      <Footer />
      {cartModal && <Cart />}
    </>
  );
}

export default Layout;
