// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./layout";
import ComingSoon from "./pages/ComingSoon";
import AboutUs from "./pages/about";
const Home = lazy(() => import("./pages/home"));
const Product = lazy(() => import("./pages/product"));
const Account = lazy(() => import("./pages/account"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Product />} />
          <Route path="account" element={<Account />} />
          <Route path="about" element={<AboutUs />} />

          <Route path="*" element={<ComingSoon />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
