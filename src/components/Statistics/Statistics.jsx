import "./Statistics.scss";
import MilesStatistics from "../MilesStatistics/MilesStatistics";
import CarStatistics from "../CarStatisitcs/CarStatistics";

function Statistics() {
  return (
    <div className="row">
      <MilesStatistics></MilesStatistics>
      <CarStatistics></CarStatistics>
    </div>
  );
}

export default Statistics;
