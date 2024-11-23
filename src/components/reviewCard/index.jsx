import { Rating } from "primereact/rating";
import NoProfile from "../../assets/images/avatar/NoProfile.webp";
import moment from "moment";

function ReviewCard() {
  return (
    <div className="bg-white text-black-500 p-5 rounded-lg space-y-3">
      <div className="flex items-center gap-3">
        <span>
          <img src={NoProfile} alt="" />
        </span>
        <div>
          <p>Tahir Ali</p>
          <p>{moment().format("DD/MMM/YYYY")}</p>
        </div>
      </div>
      <Rating value={4} readOnly cancel={false} />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est
          mollitia, corporis harum esse voluptatem dolorum excepturi molestiae
          tempora voluptate pariatur, voluptatibus repellendus ullam quae
          temporibus doloremque voluptas fugiat laboriosam.
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
