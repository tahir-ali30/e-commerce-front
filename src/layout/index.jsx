import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { Suspense } from "react";
import Loading from "../components/loading";

function Layout() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <div className="max-w-[92%] mx-auto py-5">
          <Outlet />
        </div>
      </Suspense>
      <Footer />
    </>
  );
}

export default Layout;
