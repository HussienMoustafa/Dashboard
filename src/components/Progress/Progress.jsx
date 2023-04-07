import ProgressCard from "../ProgressCard/ProgressCard";
import "./Progress.scss";
import { db } from "../../firebase/Firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import { useState, useEffect } from "react";

function Progress() {
  const [prog, setCards] = useState([]);
  const dataRef = collection(db, "ProgressCards");
  useEffect(() => {
    const getCards = async () => {
      const data = await getDocs(dataRef);
      setCards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getCards();
  }, []);
  return (
    <div className="d-flex mb-4 justify-content-between main-cards">
      {prog.map((card, index) => {
        return <ProgressCard key={index} details={card}></ProgressCard>;
      })}
    </div>
  );
}

export default Progress;
