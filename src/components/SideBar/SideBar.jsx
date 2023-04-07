import "./SideBar.scss";
import SideBarItem from "../SideBarItem/SideBarItem";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { setInActiveUser } from "../../redux/auth";

const logo =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2Flogo.svg?alt=media&token=7dbd2030-764e-406c-895e-ceea6ea69333";
const line =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2FLine.svg?alt=media&token=803305e4-c03a-4721-b6e8-a67945c437ff";
const shape =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2FShape.svg?alt=media&token=07f4ee77-8f46-47ec-83a6-34573845ecb8";
const bCar =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2Fb-car.svg?alt=media&token=051ed0b8-8b1a-4564-9d60-60977ef0c782";
const bag =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2Fbag.svg?alt=media&token=b0b53e13-6ab3-44e4-ad2c-31e7cf57d5c3";
const cart =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2Fcart.svg?alt=media&token=bc184d5c-164c-4a66-849c-b217f5abcae6";
const services =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2Fservices.svg?alt=media&token=275def10-2067-46cd-951c-e774db117be3";
const calendar =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2Fcalendar.svg?alt=media&token=f61cf2c2-7b83-484b-9e89-3f90dd41874e";
const messages =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2Fmessages.svg?alt=media&token=683f3269-e181-4fe9-9af9-b202bd7e8564";
const settingsIcon =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2Fsettings-icon.svg?alt=media&token=bc4e696b-7feb-47c6-9351-981eab6b03ef";
const logOut =
  "https://firebasestorage.googleapis.com/v0/b/reactjstask.appspot.com/o/Images%2FIcons%2Flog-out.svg?alt=media&token=978bf7e1-a009-49e9-a001-1f74e3fe5b0c";

function SideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutUser = () => {
    signOut(auth)
      .then(() => {
        dispatch(setInActiveUser());
        navigate("/Login");
      })
      .catch((error) => {
        console.log("error.message");
      });
  };

  return (
    <div className="mt-4 side-bar">
      <Link to="/">
        {/* <button></button> */}
        <div className="d-flex align-items-center mb-5 ps-2 gap-2">
          <img src={logo} alt="" />
          <p className="fs-3 fw-bold">Motiv.</p>
        </div>
      </Link>
      <div className="container-fluid d-flex flex-column c">
        <div className="d-flex flex-column gap-4">
          <Link to="/Dashboard">
            <SideBarItem name="Dashboard" img={line}></SideBarItem>
          </Link>
          <SideBarItem name="Assets" img={shape}></SideBarItem>
          <Link to="/Booking">
            <SideBarItem name="Booking" img={bCar}></SideBarItem>
          </Link>
          <SideBarItem name="Sell Cars" img={bag}></SideBarItem>
          <SideBarItem name="Buy Cars" img={cart}></SideBarItem>
          <SideBarItem name="Services" img={services}></SideBarItem>
          <SideBarItem name="Calendar" img={calendar}></SideBarItem>
          <SideBarItem name="Messages" img={messages}></SideBarItem>
        </div>
        <div className="d-flex flex-column justify-content-end gap-4 mt-auto">
          <SideBarItem name="Settings" img={settingsIcon}></SideBarItem>

          <button
            onClick={logOutUser}
            className="d-flex gap-2 align-items-center "
            // onClick={dispatch(logout())}
          >
            <img src={logOut} alt="" />
            <p>Log out</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
