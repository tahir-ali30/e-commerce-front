import { Icon } from "@iconify-icon/react/dist/iconify.js";
import Hero from "../components/home/hero";
import ProductCard from "../components/productCard";

function Home() {
  return (
    <div className="pt-5 max-w-[92%] mx-auto space-y-8">
      <Hero />

      {/* Card Section */}
      <div>
        <ul className="flex items-center justify-between border py-5 px-7">
          <li className="flex items-center gap-6">
            <Icon color="#3b82f6" width={30} icon={"iconamoon:delivery-fast"} />
            <span>
              <p className="font-semibold">Easy Free Delivery</p>
              <p>Order on $100*</p>
            </span>
          </li>
          <li className="flex items-center gap-6 border-l-2 pl-6">
            <Icon color="#3b82f6" width={30} icon={"carbon:security"} />
            <span>
              <p className="font-semibold">Premium Warranty</p>
              <p>Up to 2 years</p>
            </span>
          </li>
          <li className="flex items-center gap-6 border-l-2 pl-6">
            <Icon color="#3b82f6" width={30} icon={"hugeicons:truck-return"} />
            <span>
              <p className="font-semibold">Easy Free Return</p>
              <p>365 days return</p>
            </span>
          </li>
          <li className="flex items-center gap-6 border-l-2 pl-6">
            <Icon color="#3b82f6" width={30} icon={"bx:support"} />
            <span>
              <p className="font-semibold">24*7 Online Support</p>
              <p>Premium Support</p>
            </span>
          </li>
          <li className="flex items-center gap-6 border-l-2 pl-6">
            <Icon color="#3b82f6" width={30} icon={"mdi-light:gift"} />
            <span>
              <p className="font-semibold">Best Special Gifts</p>
              <p>First Order</p>
            </span>
          </li>
        </ul>
      </div>
      {/* Card Section End */}

      {/* Category Cards */}
      <div>
        <ul className="flex items-center justify-evenly [&_li]:text-center [&_li]:space-y-2 [&_p]:font-semibold [&_p]:text-lg">
          <li>
            <div className="rounded-full">
              <img
                className="rounded-full"
                src="https://picsum.photos/140"
                alt=""
              />
            </div>
            <p>Furniture</p>
          </li>
          <li>
            <div className="rounded-full">
              <img
                className="rounded-full"
                src="https://picsum.photos/140"
                alt=""
              />
            </div>
            <p>Clothing</p>
          </li>
          <li>
            <div className="rounded-full">
              <img
                className="rounded-full"
                src="https://picsum.photos/140"
                alt=""
              />
            </div>
            <p>Televisions</p>
          </li>
          <li>
            <div className="rounded-full">
              <img
                className="rounded-full"
                src="https://picsum.photos/140"
                alt=""
              />
            </div>
            <p>Laptop</p>
          </li>
          <li>
            <div className="rounded-full">
              <img
                className="rounded-full"
                src="https://picsum.photos/140"
                alt=""
              />
            </div>
            <p>Headphones</p>
          </li>
        </ul>
      </div>
      {/* Category Cards End */}

      <div className="space-y-4">
        <span className="text-4xl font-medium">Featured Products</span>
        <div className="flex items-center gap-5">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="border-r">
              <ProductCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
