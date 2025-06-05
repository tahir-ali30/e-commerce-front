import { Outlet, useLocation } from "react-router-dom";
import { Suspense, useEffect } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Loading from "../components/loading";
import Cart from "../components/cart";
import { ToastContainer } from "react-toastify";
import CartSidebarMix from "../components/cart/mix";
import CategorySideBar from "../components/category";
import WishlistSidebar from "../components/wishlist";
import { motion } from "motion/react";

function Layout() {
  const location = useLocation();
  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  const variants = {
    pageInitial: {
      opacity: 0,
      y: 50,
    },
    pageAnimate: {
      opacity: 1,
      y: 0,
    },
    pageExit: {
      opacity: 0,
      y: -50,
    },
  };
  return (
    <>
      <ToastContainer autoClose={2000} />
      <Header />
      <Suspense fallback={<Loading />}>
        <motion.div
          key={location.pathname}
          variants={variants}
          initial="pageInitial"
          animate="pageAnimate"
          exit={"pageExit"}
          transition={{
            type: "tween",
            duration: 0.5,
            ease: "easeInOut",
          }}
          className={`max-w-[92%] mx-auto py-5`}
        >
          <Outlet />
        </motion.div>
      </Suspense>
      <Footer />
      {/* <Cart /> */}
      <CartSidebarMix />
      <CategorySideBar />
      <WishlistSidebar />
    </>
  );
}

export default Layout;
