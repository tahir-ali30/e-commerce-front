import { InputNumber } from "primereact/inputnumber";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard({ data }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <li key={data?.id} className="flex py-6 px-2">
      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          alt={data?.imageAlt}
          src={data?.imageSrc}
          className="size-full object-cover"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link to={data?.href}>{data?.name}</Link>
            </h3>
            <p className="ml-4">{data?.price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{data?.color}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {data?.quantity}</p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
