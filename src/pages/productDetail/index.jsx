import { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { Rating } from "primereact/rating";
import { InputNumber } from "primereact/inputnumber";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import ProductCard from "../../components/productCard";
import ReviewCard from "../../components/reviewCard";
import Products from "../../constant/MOCK_DATA.json";
import { products } from "../../constant/products-data";

import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import SwiperNavigations from "../../components/swiperNavigations";

function Product() {
  const { slug } = useParams();
  const product = products.find((prod) => prod.slug === slug);

  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState("description");

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      {/* Breadcrumbs Start */}
      <div className="flex flex-wrap items-center gap-5 divide-x *:pl-4 pb-8">
        <span className="!pl-0">
          <Link>Home</Link>
        </span>
        <span>
          <Link>Mobiles</Link>
        </span>
        <span>
          <Link>Mobile Camera Lens</Link>
        </span>
        <span>
          <Link>Apple Iphone 14 Pro Max, 64GB, White - Fully Unlocked</Link>
        </span>
        {/* Breadcrumbs End */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 w-full">
        <div className="col-span-5 border-r px-4">
          <img
            // src="https://prestashop.coderplace.com/PRS03/PRS03058/demo/34-large_default/hummingbird-printed-t-shirt.jpg"
            src={product?.thumbnail}
            alt="iphone img"
            className="aspect-auto object-contain w-full h-full"
          />
        </div>
        <div className="col-span-7 space-y-3 md:pl-8">
          <h1 className="text-3xl">{product?.name}</h1>
          <Rating
            // value={Math.floor(Math.random() * 5)}
            value={3}
            cancel={false}
            readOnly
          />
          <div className="items-center space-x-2 divide-x product-brand-breadcrumbs border-b pb-3 hidden">
            <p>Brand: Sony Master</p>
            <p>Reference: APL3764561</p>
            <p>Condition: New</p>
          </div>
          <p className="line-clamp-3">{product?.description}</p>
          {/* Colors */}
          <div className="product-colors flex flex-wrap items-center gap-2">
            <span>Color:</span>
            {product?.colors.map((color) => (
              <div
                onClick={(e) => setSelectedColor(color)}
                className={`border rounded-md p-2 cursor-pointer transition-all duration-150 ease-in ${
                  selectedColor === color ? "border-black" : "border-slate-300"
                }`}
              >
                {color}
              </div>
            ))}
          </div>
          {/* Colors End */}
          {/* Sizes or Storage */}
          <div className="flex flex-wrap items-center gap-4">
            <span>Sizes:</span>
            {product.sizes.map((size) => (
              <div
                onClick={(e) => setSelectedSize(size)}
                className={`border rounded-md p-2 cursor-pointer transition-all duration-150 ease-in ${
                  selectedSize === size ? "border-black" : "border-slate-300"
                }`}
              >
                {size}
              </div>
            ))}
          </div>
          {/* Sizes End */}
          <div className="bg-green-200/60 p-2 rounded-md flex items-stretch justify-center gap-1.5 max-w-max text-green-500">
            <Icon
              icon={"ic:baseline-check"}
              className="flex justify-center items-center"
            />
            <span>In Stock</span>
          </div>
          <div className="text-3xl font-semibold py-3">
            <span>${product?.price}</span>
          </div>
          {/* Add to Cart and Quantity Counter */}
          <div className="flex flex-wrap items-center gap-10 max-w-max border-y py-5 px-2">
            <div>
              <InputNumber
                value={quantity}
                showButtons
                min={1}
                max={20}
                onValueChange={(e) => setQuantity(e.value)}
              />
            </div>
            <div>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
            <div>
              <button className="flex items-center justify-center gap-1.5 hover:text-main transition-colors duration-300 ease-in-out">
                <Icon icon={"line-md:heart-filled"} color="red" />
                <span>Add to Wishlist</span>
              </button>
            </div>
          </div>
          {/* Add to Cart and Quantity Counter End */}
        </div>
      </div>

      <div className="mt-16">
        <div className="border-t-slate-300 border-t p-4 rounded-md">
          <ul className="pt-4 flex justify-center items-center gap-10 text-2xl product-detail-tabs bg-white">
            <li
              className={`cursor-pointer ${
                selectedTab === "description" ? "active" : ""
              }`}
              onClick={() => setSelectedTab("description")}
            >
              Description
            </li>
            <li
              className={`cursor-pointer ${
                selectedTab === "review" ? "active" : ""
              }`}
              onClick={() => setSelectedTab("review")}
            >
              Reviews
            </li>
          </ul>
          {/* <div className="p-8 shadow-dropdown shadow-black rounded-md"> */}
          <AnimatePresence mode="wait">
            {selectedTab === "description" && (
              <motion.div
                key={"description"}
                initial={{
                  opacity: 0,
                  y: "-100px",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  x: "-100%",
                  opacity: "0",
                }}
                transition={{ duration: 0.75 }}
                className="text-xl p-8 shadow-dropdown shadow-black rounded-md"
              >
                {product?.description}
              </motion.div>
            )}
            {selectedTab === "review" && (
              <motion.div
                key={"review"}
                initial={{
                  opacity: 0,
                  y: "-100px",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  x: "-100%",
                  opacity: "0",
                }}
                transition={{ duration: 0.75 }}
                className="p-8 shadow-dropdown shadow-black rounded-md"
              >
                <Swiper
                  modules={[Autoplay]}
                  slidesPerView={3}
                  spaceBetween={40}
                  autoplay
                  loop
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <SwiperSlide key={index}>
                      <ReviewCard />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            )}
          </AnimatePresence>
          {/* </div> */}
        </div>
      </div>

      {/* Related Products Start */}
      <div className="mt-20 space-y-4">
        <div className="text-3xl border-b-2">You might also like</div>
        <div>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={40}
            autoplay
            loop
            breakpoints={{
              600: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              800: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
          >
            {Products.slice(40).map((item, index) => (
              <SwiperSlide key={index}>
                <ProductCard data={item} />
              </SwiperSlide>
            ))}
            {/* <SwiperNavigations leftRef={prevRef} rightRef={nextRef} /> */}
          </Swiper>
        </div>
      </div>
      {/* Related Products End */}
    </>
  );
}

export default Product;
