import "./CarInfoCard.scss";

const set =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2Fset.svg?alt=media&token=b5ffd525-a708-4454-b4ac-f908496aa5d4";
const flash =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2Fflash.svg?alt=media&token=9fa978c2-d43f-427b-ad21-b488820aca04";
const retweet =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2Fret.svg?alt=media&token=83d6a638-7d7b-4469-8737-124274242688";
const recycle =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2Frecycle.svg?alt=media&token=6ac23c14-d621-49c9-a8ba-1b73cf20f6a3";

export default function CarInfoCard(props) {
  const { name, img, recommended, perHour, bgColor, kilos } = props.details;

  return (
    <div
      className="card d-flex flex-column py-3 px-4 rounded-4"
      style={{ backgroundColor: bgColor }}
    >
      <div className="d-flex gap-2 mb-2">
        <img src={recycle} alt="" />
        <p className="fw-bold">{recommended}% Recommend</p>
      </div>
      <img className="porche" src={img} alt="" />
      <p className="car-name mb-2 mt-1">{name}</p>
      <div className="d-flex gap-3">
        <div className="d-flex gap-3">
          <img src={retweet} alt="" />
          <p className="price">{kilos}</p>
          <img src={set} alt="" />
          <img src={flash} alt="" />
        </div>
        <div className="ms-auto price">${perHour}/h</div>
      </div>
    </div>
  );
}
