/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Rating } from "primereact/rating";

function ProductCard({ data }) {
  return (
    <div className="relative space-y-1.5">
      <Link>
        <img
          src="https://picsum.photos/200"
          alt=""
          className="aspect-auto object-cover w-full h-full"
        />
        {/* <img src={data?.image} alt={data?.name} /> */}
      </Link>
      <div className="space-y-1">
        {/* <p className="text-gray-500">Lorem ipsum dolor sit.</p> */}
        <p className="text-gray-500">{data?.brand}</p>
        {/* <p className="line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,
          adipisci!
        </p> */}
        <p className="line-clamp-2">{data?.name}</p>
        <Rating
          // value={Math.floor(Math.random() * 5)}
          value={data?.rating}
          cancel={false}
          readOnly
        />
        <p>{data?.price}</p>
      </div>
      <button className="btn btn-primary mt-2">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
