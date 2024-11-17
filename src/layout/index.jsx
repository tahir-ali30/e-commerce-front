import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

function Layout() {
  return (
    <>
      <Header />
      <div className="max-w-[92%] mx-auto py-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
