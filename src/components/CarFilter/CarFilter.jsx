import "./CarFilter.scss";
import { useSelector } from "react-redux";

const filledHeart =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2Flove2.svg?alt=media&token=289a1686-525f-4ad9-8ada-6895f8966ba3";
const Rectangle =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2FRectangle.svg?alt=media&token=deb0b418-1ad1-4193-88c5-a7d252f8d4a9";
const Line =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2FLine.svg?alt=media&token=803305e4-c03a-4721-b6e8-a67945c437ff";
const settings =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2Fsettings.svg?alt=media&token=4cc6d8f7-e5c7-4778-ad81-d5a3fa37c546";

function CarFilter() {
  const count = useSelector((state) => state.countLoves.value);

  return (
    <div>
      <div className="d-flex">
        <h2 className="py-4">Booking</h2>
        <div className="d-flex align-items-center justify-content-center gap-3 heart">
          <img src={filledHeart} alt="" />
          <h2 className="">: {count}</h2>
        </div>
      </div>
      <div className="d-flex justify-content-between bx">
        <div className="d-flex gap-3 mb-5">
          <button className="btn rounded-pill d-flex align-items-center gap-3 px-4">
            <p>New</p>
            <img src={Rectangle} alt="" />
          </button>
          <button className="btn rounded-pill d-flex align-items-center gap-3 px-4">
            <p>Toyota</p>
            <img src={Rectangle} alt="" />
          </button>
        </div>

        <div className="d-flex gap-3 pe-2">
          <button className="bt">
            <img src={Line} alt="" />
          </button>
          <button className="bt btn-2">
            <img src={settings} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarFilter;
