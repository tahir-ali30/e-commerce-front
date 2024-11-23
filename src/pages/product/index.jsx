import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { Rating } from "primereact/rating";
import { InputNumber } from "primereact/inputnumber";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import ProductCard from "../../components/productCard";
import ReviewCard from "../../components/reviewCard";
import Products from "../../constant/MOCK_DATA.json";
import SwiperNavigations from "../../components/swiperNavigations";

function Product() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState("64GB");
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
            src="https://prestashop.coderplace.com/PRS03/PRS03058/demo/34-large_default/hummingbird-printed-t-shirt.jpg"
            alt="iphone img"
            className="aspect-auto object-contain w-full h-full"
          />
        </div>
        <div className="col-span-7 space-y-3 md:pl-8">
          <h1 className="text-3xl">
            Apple Iphone 14 Pro Max, 64GB, White - Fully Unlocked
          </h1>
          <Rating
            // value={Math.floor(Math.random() * 5)}
            value={3}
            cancel={false}
            readOnly
          />
          <div className="flex items-center space-x-2 divide-x product-brand-breadcrumbs border-b pb-3">
            <p>Brand: Sony Master</p>
            <p>Reference: APL3764561</p>
            <p>Condition: New</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos commodi molestiae atque soluta architecto porro officia
            quisquam aperiam accusantium doloribus numquam est dolore
            consequatur, ullam quaerat harum! Consequatur, totam dolores.
          </p>
          {/* Colors */}
          <div className="product-colors flex flex-wrap items-center gap-2">
            <span>Color:</span>
            <div
              onClick={(e) => setSelectedColor(e.target.style.backgroundColor)}
              style={{
                backgroundColor: "black",
                scale: selectedColor == "black" ? "1.35" : "1",
              }}
            ></div>
            <div
              onClick={(e) => setSelectedColor(e.target.style.backgroundColor)}
              style={{
                backgroundColor: "red",
                scale: selectedColor == "red" ? "1.35" : "1",
              }}
            ></div>
            <div
              onClick={(e) => setSelectedColor(e.target.style.backgroundColor)}
              style={{
                backgroundColor: "purple",
                scale: selectedColor == "purple" ? "1.35" : "1",
              }}
            ></div>
            <div
              onClick={(e) => setSelectedColor(e.target.style.backgroundColor)}
              style={{
                backgroundColor: "orange",
                scale: selectedColor == "orange" ? "1.35" : "1",
              }}
            ></div>
          </div>
          {/* Colors End */}
          {/* Sizes or Storage */}
          <div className="flex flex-wrap items-center gap-4">
            <span>Storage:</span>
            <div
              onClick={(e) => setSelectedSize(e.target.innerText)}
              className={`border rounded-md p-2 cursor-pointer transition-all duration-150 ease-in ${
                selectedSize === "64GB" && "border-black"
              }`}
            >
              64GB
            </div>
            <div
              onClick={(e) => setSelectedSize(e.target.innerText)}
              className={`border rounded-md p-2 cursor-pointer transition-all duration-150 ease-in ${
                selectedSize === "128GB" && "border-black"
              }`}
            >
              128GB
            </div>
            <div
              onClick={(e) => setSelectedSize(e.target.innerText)}
              className={`border rounded-md p-2 cursor-pointer transition-all duration-150 ease-in ${
                selectedSize === "256GB" && "border-black"
              }`}
            >
              256GB
            </div>
            <div
              onClick={(e) => setSelectedSize(e.target.innerText)}
              className={`border rounded-md p-2 cursor-pointer transition-all duration-150 ease-in ${
                selectedSize === "512GB" && "border-black"
              }`}
            >
              512GB
            </div>
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
            <span>$260.00</span>
          </div>
          {/* Add to Cart and Quantity Counter */}
          <div className="flex flex-wrap items-center gap-10 max-w-max border-y py-5">
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
              <button className="btn-primary">Add to Cart</button>
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

      <div className="mt-16 bg-main rounded-md">
        <ul className="border-t pt-4 flex justify-center items-center gap-10 text-2xl product-detail-tabs bg-white">
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
        <div className="p-8 text-white">
          {selectedTab === "description" && (
            <div className="text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque aut neque quis eveniet aliquam? Quas, quae. Animi
              maiores ut omnis repellat dignissimos ratione saepe, sunt sit
              natus hic reiciendis nulla quod alias quibusdam repudiandae
              laboriosam neque eveniet sequi nihil veritatis! Similique, facere
              quas! Sed repellat laudantium neque eligendi, incidunt aspernatur
              rerum ut nihil quis. Aperiam iure officia temporibus ducimus
              impedit, reprehenderit ipsum tempore accusamus, dolorum repellat
              neque voluptatem animi obcaecati distinctio fugiat dignissimos
              odio tenetur ullam iste cum, quasi vero eos? Odio, enim
              exercitationem. Illo aperiam quaerat commodi accusamus quae ut
              reprehenderit distinctio magni perferendis, ab ea, consequatur
              labore eius. Possimus suscipit cum tenetur beatae repellendus
              impedit sed odit sint excepturi, voluptates ipsam consequatur
              omnis quisquam totam deleniti fuga doloremque veniam aliquam
              aspernatur voluptatum numquam alias praesentium! Esse placeat
              explicabo quidem provident? Consequuntur vitae neque laboriosam
              ipsam laudantium odit possimus, quisquam sequi, eum ipsa quos
              doloribus pariatur! Nobis quae facilis id nam suscipit dolores
              similique aut corporis praesentium officiis quo consequatur at
              voluptates neque libero odio expedita totam, quas excepturi omnis
              magni vitae eos! Autem eos molestias perspiciatis voluptates,
              aliquam unde ducimus voluptatem ut quia suscipit animi, excepturi
              asperiores repudiandae vel, inventore alias dolorem natus dolores
              laboriosam officiis rerum quibusdam?
            </div>
          )}
          {selectedTab === "review" && (
            <div>
              <Swiper
                modules={[Autoplay]}
                slidesPerView={3}
                spaceBetween={40}
                // autoplay
                loop
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <SwiperSlide key={index}>
                    <ReviewCard />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>

      {/* Related Products Start */}
      <div className="mt-20 space-y-4">
        <div className="text-3xl">You might also like</div>
        <div>
          <Swiper
            // onBeforeInit={(swiper) => {
            //   swiper.params.navigation.prevEl = prevRef.current;
            //   swiper.params.navigation.nextEl = nextRef.current;
            // }}
            // navigation={{
            //   prevEl: prevRef.current,
            //   nextEl: nextRef.current,
            // }}
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={40}
            // autoplay
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
