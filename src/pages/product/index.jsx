import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { Rating } from "primereact/rating";
import { useState } from "react";
import { Link } from "react-router-dom";

import { InputNumber } from "primereact/inputnumber";

function Product() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState("64GB");
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState("description");
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

      <div className="mt-16">
        <ul className="border-b pb-2 flex justify-center items-center gap-10 text-2xl product-description">
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
      </div>
    </>
  );
}

export default Product;
