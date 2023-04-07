import "./Booking.scss";
import CarFilter from "../../components/CarFilter/CarFilter";
import Cars from "../../components/Cars/Cars";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";

function BookingPage() {
  return (
    <>
      <div className="container">
        <SideBar></SideBar>
      </div>
      <div className="main-content">
        <NavBar></NavBar>
        <div className="container  booking">
          <CarFilter></CarFilter>
          <Cars></Cars>
        </div>
      </div>
    </>
  );
}

export default BookingPage;
