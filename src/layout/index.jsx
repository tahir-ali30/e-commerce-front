/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Header from "../components/header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
