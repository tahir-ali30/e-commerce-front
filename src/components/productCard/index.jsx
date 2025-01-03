import { Link } from "react-router-dom";
import { Rating } from "primereact/rating";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import NotFound from "../../assets/images/vectors/not-found.jpg";

function ProductCard({ data, addToCart }) {
  return (
    <div className="relative space-y-1.5 group">
      <Link className="relative ">
        {/* <img
          src="https://picsum.photos/200"
          alt=""
          className="aspect-auto object-cover w-full h-full"
        /> */}
        <div className="h-80">
          <img
            src={data?.thumbnail ? data?.thumbnail : NotFound}
            alt={data?.name}
            className="aspect-auto object-contain w-full h-full"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100 bg-white p-2 rounded-md flex items-center justify-center hover:scale-110">
          {true ? (
            <Icon width={20} icon={"mdi:heart-outline"} />
          ) : (
            <Icon
              width={20}
              icon={"mdi:heart"}
              color="red"
              className="text-red-500"
            />
          )}
        </div>
      </Link>
      <div className="space-y-1">
        {/* <p className="text-gray-500">Lorem ipsum dolor sit.</p> */}
        {data?.brand && <p className="text-gray-500">{data?.brand}</p>}
        {/* <p className="line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,
          adipisci!
        </p> */}
        <p className="line-clamp-2">{data?.name}</p>
        <Rating
          // value={Math.floor(Math.random() * 5)}
          value={data?.rating || 0}
          cancel={false}
          readOnly
        />
        <p>{data?.price}</p>
      </div>
      <button onClick={() => addToCart(data)} className="btn btn-primary mt-2">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
