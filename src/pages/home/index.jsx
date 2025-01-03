import { Icon } from "@iconify-icon/react/dist/iconify.js";
import Hero from "../../components/home/hero";
import ProductCard from "../../components/productCard";
import { products } from "../../constant/products-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperNavigations from "../../components/swiperNavigations";
import { useCallback, useEffect, useRef } from "react";
import { brands } from "../../constant/data";
import { v4 as uuidv4 } from "uuid";
import { addToCart as saveToCart } from "../../store/cart/slice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function Home() {
  // const Products = products.map((i) => ({ ...i, id: uuidv4() }));

  const dispatcher = useDispatch();
  const cart = useSelector((state) => state.cart);
  const timeoutId = useRef(null);

  const addToCart = (data) => {
    dispatcher(saveToCart({ item: data }));
    toast("Item added to cart!");
  };

  useEffect(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    if (cart?.items.length > 0) {
      timeoutId.current = setTimeout(() => {
        console.log(cart);
      }, 2500);
    }

    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, [cart]);

  return (
    <div className="space-y-8">
      <Hero />

      {/* Card Section Start */}
      <div>
        <ul className="flex items-center md:justify-between gap-3 border py-5 px-7 flex-wrap">
          <li className="flex items-center gap-6">
            <Icon color="#3b82f6" width={30} icon={"iconamoon:delivery-fast"} />
            <span>
              <p className="font-semibold">Easy Free Delivery</p>
              <p>Order on $100*</p>
            </span>
          </li>
          <li className="flex items-center gap-6 md:border-l-2 md:pl-6">
            <Icon color="#3b82f6" width={30} icon={"carbon:security"} />
            <span>
              <p className="font-semibold">Premium Warranty</p>
              <p>Up to 2 years</p>
            </span>
          </li>
          <li className="flex items-center gap-6 md:border-l-2 md:pl-6">
            <Icon color="#3b82f6" width={30} icon={"hugeicons:truck-return"} />
            <span>
              <p className="font-semibold">Easy Free Return</p>
              <p>365 days return</p>
            </span>
          </li>
          <li className="flex items-center gap-6 md:border-l-2 md:pl-6">
            <Icon color="#3b82f6" width={30} icon={"bx:support"} />
            <span>
              <p className="font-semibold">24*7 Online Support</p>
              <p>Premium Support</p>
            </span>
          </li>
          <li className="flex items-center gap-6 md:border-l-2 md:pl-6">
            <Icon color="#3b82f6" width={30} icon={"mdi-light:gift"} />
            <span>
              <p className="font-semibold">Best Special Gifts</p>
              <p>First Order</p>
            </span>
          </li>
        </ul>
      </div>
      {/* Card Section End */}

      {/* Category Cards Start */}
      <div className="w-full overflow-hidden">
        <ul className="flex items-center justify-evenly gap-4 [&_li]:text-center [&_li]:space-y-2 [&_p]:font-semibold [&_p]:text-sm [&_p]:md:text-lg overflow-x-scroll">
          <li>
            <div className="w-full flex justify-center rounded-full size-14 md:size-auto">
              <img
                className="rounded-full"
                src="https://picsum.photos/140"
                alt=""
              />
            </div>
            <p>Furniture</p>
          </li>
          <li>
            <div className="w-full flex justify-center rounded-full size-14 md:size-auto">
              <img
                className="rounded-full"
                src="https://picsum.photos/140"
                alt=""
              />
            </div>
            <p>Clothing</p>
          </li>
          <li>
            <div className="w-full flex justify-center rounded-full size-14 md:size-auto">
              <img
                className="rounded-full"
                src="https://picsum.photos/140"
                alt=""
              />
            </div>
            <p>Televisions</p>
          </li>
          <li>
            <div className="w-full flex justify-center rounded-full size-14 md:size-auto">
              <img
                className="rounded-full"
                src="https://picsum.photos/140"
                alt=""
              />
            </div>
            <p>Laptop</p>
          </li>
          <li>
            <div className="w-full flex justify-center rounded-full size-14 md:size-auto">
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

      {/* Featured Products Start */}
      <section className="space-y-4">
        <span className="text-lg md:text-4xl font-medium">
          Featured Products
        </span>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          modules={[Navigation]}
          navigation={{
            nextEl: ".next-featuredProduct",
            prevEl: ".prev-featuredProduct",
          }}
          breakpoints={{
            600: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {
            // Array.from({ length: 6 }).map((_, index) => (
            products.slice(0, 10).map((item, index) => (
              <SwiperSlide
                key={index}
                className="first:border-l-0 border-l pl-3"
              >
                <ProductCard data={item} addToCart={addToCart} />
              </SwiperSlide>
            ))
          }
          <SwiperNavigations selector={"featuredProduct"} />
        </Swiper>
      </section>
      {/* Featured Products End */}

      {/* Banner Section Start */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="home-banner-1 relative md:col-span-4 rounded-md overflow-hidden group">
          <a href="#">
            <img
              src="https://prestashop.coderplace.com/PRS03/PRS03058/demo/modules/cp_cmsbanner2/views/img/cms-banner1.jpg"
              alt="banner1"
              className="aspect-auto object-cover w-full h-full rounded-md group-hover:scale-105 transition-transform duration-500 ease-in"
            />
          </a>
          <span className="max-w-[50%] absolute top-0 md:top-5 left-0 p-4 md:p-8 space-y-1 cursor-pointer">
            <p className="text-2xl font-semibold">Collection Of Watches</p>
            <p className="text-xl">$490.00</p>
            <p className="text-base underline text-blue-500">Shop Now</p>
          </span>
        </div>
        <div className="home-banner-1 relative md:col-span-8 rounded-md overflow-hidden group">
          <a href="#">
            <img
              src="https://prestashop.coderplace.com/PRS03/PRS03058/demo/modules/cp_cmsbanner2/views/img/cms-banner2.jpg"
              alt="banner1"
              className="aspect-auto object-cover w-full h-full rounded-md group-hover:scale-105 transition-transform duration-500 ease-in"
            />
          </a>
          <span className="max-w-[50%] absolute top-0 md:top-5 left-0 py-2 px-4 md:p-8 md:space-y-1 cursor-pointer">
            <p className="text-base md:text-2xl font-semibold">
              Explore Latest Sofa Set Designs
            </p>
            <p className="text-sm md:text-xl">$300.00</p>
            <p className="text-xs md:text-base underline text-blue-500">
              Shop Now
            </p>
          </span>
        </div>
      </section>
      {/* Banner Section End */}

      {/* New Products Start */}
      <section className="space-y-4">
        <span className="text-4xl font-medium">New Products</span>
        <Swiper
          className="!w-full"
          slidesPerView={2}
          spaceBetween={30}
          modules={[Navigation]}
          navigation={{
            nextEl: ".next-newProduct",
            prevEl: ".prev-newProduct",
          }}
          breakpoints={{
            600: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {
            // Array.from({ length: 6 }).map((_, index) => (
            products.slice(11, 20).map((item, index) => (
              <SwiperSlide
                key={index}
                className="first:border-l-0 border-l pl-3"
              >
                <ProductCard data={item} addToCart={addToCart} />
              </SwiperSlide>
            ))
          }
          <SwiperNavigations selector={"newProduct"} />
        </Swiper>
      </section>
      {/* New Products End */}

      {/* Brands Section Start */}
      <section className="my-5">
        <Swiper
          className="!w-full border-y"
          slidesPerView={3}
          spaceBetween={30}
          modules={[Navigation]}
          navigation={{
            nextEl: ".next-brands",
            prevEl: ".prev-brands",
          }}
          breakpoints={{
            600: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {
            // Array.from({ length: 6 }).map((_, index) => (
            brands.map((item, index) => (
              <SwiperSlide
                key={index}
                // className="first:border-l-0 border-l pl-3"
              >
                <div className="flex justify-center items-center py-10">
                  <a>
                    <img src={item} alt="brand_img" />
                  </a>
                </div>
              </SwiperSlide>
            ))
          }
          <SwiperNavigations selector={"brands"} />
        </Swiper>
      </section>

      {/* Brands Section End */}
    </div>
  );
}

export default Home;
