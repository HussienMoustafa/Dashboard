import { useState } from "react";
import "./CarCard.scss";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/CountLoves";

const retweet =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2Fretweet.svg?alt=media&token=e919607f-c576-4fb4-808d-2977418dc1ed";
const person =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2Fperson.svg?alt=media&token=e7df23f6-05cf-4fa4-b94d-fa0860c33079";
const love =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2Flove.svg?alt=media&token=bd3635c3-a5d8-45ad-aa04-8fe47700362f";
const filledHeart =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2Flove2.svg?alt=media&token=289a1686-525f-4ad9-8ada-6895f8966ba3";
const heart =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2Fheart.svg?alt=media&token=02b941fb-0a79-4ad9-b9c6-4225b75e8416";

function CarCard(props) {
  const { name, img, gearBoxType, numberOfSeats, price } = props.details;
  const [isClicked, setIsClicked] = useState(true);
  const dispatch = useDispatch();

  function changeHeart() {
    setIsClicked((current) => !current);
    isClicked ? dispatch(increment()) : dispatch(decrement());
  }

  return (
    <div className="col-lg-4 col-md-6 car-card">
      <div className="card d-flex flex-column bg-white py-4 px-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>{name}</h5>
          <button>
            <img
              src={isClicked ? love : filledHeart}
              onClick={changeHeart}
              alt=""
            />
          </button>
        </div>
        <p className="mb-3">Coupe</p>
        <img className="porche" src={img} alt="" />
        <div className="d-flex mt-5 gap-3">
          <div className="d-flex gap-1">
            <img src={person} alt="" />
            <p>{numberOfSeats}</p>
          </div>
          <div className="d-flex gap-1">
            <img src={retweet} alt="" />
            <p>{gearBoxType}</p>
          </div>
          <p className="ms-auto">
            <strong>${price}</strong>/d
          </p>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
