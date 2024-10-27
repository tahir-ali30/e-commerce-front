import { Link } from "react-router-dom";

function HomeHeader() {
  return (
    <header className="w-full">
      <nav className="w-full flex justify-end px-4">
        <ul className="w-1/4 flex items-center justify-around hover:[&_a]:text-white [&_a]:transition [&_a]:duration-200 [&_a]:ease-in">
          <Link to={"/"}>Home</Link>
          <Link to={"products"}>Products</Link>
          <Link to={"account"}>Account</Link>
          <Link to={"wishlist"}>Wishlist</Link>
          <Link to={"cart"}>Cart</Link>
        </ul>
      </nav>
    </header>
  );
}

export default HomeHeader;
