import "./Dashboard.scss";
import Progress from "../../components/Progress/Progress";
import Statistics from "../../components/Statistics/Statistics";
import CarInfo from "../../components/CarInfo/CarInfo";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";

function Dashboard() {
  return (
    <>
      <div className="container">
        <SideBar></SideBar>
      </div>
      <div className="main-content">
        <NavBar></NavBar>
        <div className="container p-3">
          <Progress></Progress>
          <Statistics></Statistics>
          <CarInfo></CarInfo>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
