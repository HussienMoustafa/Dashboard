import "./NavBar.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../redux/auth";
import { updateCars, updateTarget } from "../../redux/CarSlice";
const search =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2Fsearch.svg?alt=media&token=73690d35-e3a3-4248-8f45-ad41ea190151";
const profile =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FImages%2Fprofile-pic.png?alt=media&token=92b0d95a-bf56-4bc2-8657-e27cb91141fd";
const notifications =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2Fnotifications.svg?alt=media&token=133439ef-16ea-423f-bbb3-740dd36eba61";

function searchingCars(carsData, typed) {
  let resultedCars = carsData.filter((car) => car.name.includes(typed));
  return resultedCars;
}

function NavBar() {
  const show = useSelector((state) => state.auth.userName);
  const carsData = useSelector((state) => state.cars.carsData);
  const dispatch = useDispatch();

  const [term, setTerm] = useState("");

  const getFormValue = (e) => {
    e.preventDefault();
    setTerm(e.target.value);
    // let resultedCars = searchingCars(carsData, e.target.value);
    // console.log(e.target.value);
    // console.log(resultedCars);
    dispatch(updateTarget(e.target.value));
    // dispatch(updateCars(resultedCars));
  };

  return (
    <div className="d-flex bg-white align-items-center justify-content-between p-3">
      <div>
        {/* className="d-flex gap-2" */}
        <div className="search d-flex align-items-center gap-2 ps-2">
          <button type="submit">
            <img src={search} alt="" />
          </button>
          <input
            type="text"
            value={term}
            placeholder="Search or type"
            className="border-0 w-100"
            onChange={getFormValue}
          />
        </div>
      </div>
      <div>
        <h3>Welcome back {show} !</h3>
      </div>
      <div className="d-flex gap-4 align-items-center">
        <div>
          <img src={notifications} alt="" />
        </div>
        <div>
          <img className="rounded-pill" src={profile} alt="" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
