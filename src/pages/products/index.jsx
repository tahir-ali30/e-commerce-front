import React from "react";
import Textinput from "../../components/ui/Textinput";
import Select from "../../components/ui/Select";
import { products } from "../../constant/products-data";
import ProductCard from "../../components/productCard";
import { Rating } from "primereact/rating";

function Products() {
  return (
    <>
      <div className="grid grid-cols-[300px,1fr] gap-4 relative">
        {/* Filter */}
        <div className="border rounded-md p-5 space-y-3 max-h-max sticky top-28">
          <p className="text-xl font-bold">Filter By</p>
          <Textinput label={"name"} placeholder="Enter Product Name" />
          <Select label={"Category"} placeholder="Select Category" />
          <Select label={"Brand"} placeholder="Select Brand" />
          <div>
            <label htmlFor="price">Price</label>
            <span className="flex items-center gap-3">
              <Textinput
                label={"Min Price"}
                placeholder="Enter Min Price"
                type={"number"}
              />
              <Textinput
                label={"Max Price"}
                placeholder="Enter Max Price"
                type={"number"}
              />
            </span>
          </div>
          <div className="space-y-1.5">
            <label htmlFor="rating">Rating</label>
            <Rating />
          </div>
        </div>
        {/* Filter */}

        <div className="w-full">
          <div className="flex items-center justify-between">
            <h2>Products</h2>
            <div>
              <Select placeholder="Sort By" />
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
            {products.map((prod) => (
              <ProductCard data={prod} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
