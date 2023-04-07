import CarCard from "../CarCard/CarCard";
import "./Cars.scss";
import { db } from "../../firebase/Firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCars } from "../../redux/CarSlice";

function Cars() {
  // const dispatch = useDispatch();
  const [cars, setCars] = useState([]);
  const target = useSelector((state) => state.cars.target);

  const carsRef = collection(db, "cars");
  // let carsData;
  useEffect(() => {
    const getCars = async () => {
      const data = await getDocs(carsRef);
      setCars(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getCars();
  }, []);
  // dispatch(updateCars(cars));

  // carsData = useSelector((state) => state.cars.carsData);
  // console.log(carsData);
  // console.log(target);

  return (
    <div className="row mb-4 cars-cards">
      {target
        ? cars
            .filter((car) =>
              car.name.toLowerCase().startsWith(target.toLowerCase())
            )
            .map((car, index) => {
              return <CarCard key={index} details={car} />;
            })
        : cars.map((car, index) => {
            return <CarCard key={index} details={car} />;
          })}
      {/* {carsData.map((car, index) => {
        return <CarCard key={index} details={car} />;
      })} */}
    </div>
  );
}

export default Cars;
