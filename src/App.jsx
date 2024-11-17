// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import Home from "./pages/home";
import Product from "./pages/product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
