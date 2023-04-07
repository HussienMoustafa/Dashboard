import "./CarInfo.scss";
import CarInfoCard from "../CarInfoCard/CarInfoCard";
import { db } from "../../firebase/Firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import { useState, useEffect } from "react";

function CarInfo() {
  const [cars, setCars] = useState([]);
  const carsRef = collection(db, "DashboardCars");
  useEffect(() => {
    const getCars = async () => {
      const data = await getDocs(carsRef);
      setCars(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getCars();
  }, []);
  return (
    <div className="d-flex mb-4 justify-content-between cars-cards">
      {cars.map((car, index) => {
        return <CarInfoCard key={index} details={car}></CarInfoCard>;
      })}
    </div>
  );
}

export default CarInfo;
