import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 380 && document.body.clientHeight >= 1300)
        setIsScrolling(true);
      else setIsScrolling(false);
    }
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full ${
        isScrolling ? "fixed animate-top" : "static"
      } z-10 transition-transform duration-500 ease-in-out`}
    >
      <div className="bg-main ">
        <nav className="flex justify-between items-center max-w-[95%] mx-auto py-3 md:py-6 text-white">
          <div>
            <Link to={"/"} className="font-bold text-lg md:text-4xl italic">
              ZilingoMall
            </Link>
          </div>
          <div className="lg:flex items-center bg-white p-1 rounded-md grow mx-40 hidden">
            <input
              type="text"
              placeholder="Search Product Here..."
              className="p-1 grow outline-none text-black"
            />
            <button className="flex justify-center items-center">
              <Icon
                width={25}
                icon={"mingcute:search-line"}
                className="text-main pr-2"
              />
            </button>
          </div>
          <ul className="header-links lg:w-1/4 flex items-center gap-3 lg:justify-around">
            <Link to={"products"}>Products</Link>
            <Link to={"account"}>Account</Link>
            <Link to={"wishlist"}>Wishlist</Link>
            <Link to={"cart"}>Cart</Link>
          </ul>
        </nav>
      </div>

      {/* Categories Section */}
      <section className="border-b bg-white md:block hidden">
        <div className="max-w-[95%] mx-auto flex items-center gap-10">
          <span className="border-r py-4 pr-4">
            <span className="flex items-center gap-2">
              <Icon icon={"material-symbols-light:menu"} width={20} />
              <span>Browse Categories</span>
            </span>
          </span>
          <span>
            <ul className="list-none flex items-center gap-8">
              <li>Mobiles</li>
              <li>Televisions</li>
              <li>Air Coolers</li>
              <li>Refrigerators</li>
              <li>All Brands</li>
            </ul>
          </span>
        </div>
      </section>
    </header>
  );
}

export default Header;
