import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <div className="relative space-y-1.5">
      <Link>
        <img src="https://picsum.photos/200" alt="" />
      </Link>
      <div className="space-y-1">
        <p className="text-gray-500">Lorem ipsum dolor sit.</p>
        <p className="line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,
          adipisci!
        </p>
        <p>Review Prop</p>
        <p>$Price</p>
      </div>
      <button className="btn btn-primary mt-2">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
