import React from "react";
import "./ProgressCard.scss";
export default function ProgressCard(props) {
  const { name, icon, spin, spinColor, percentage } = props.details;
  return (
    <div className="progressCard text-center d-flex flex-column gap-4">
      <div>
        <img className="icon" src={icon} alt="" />
      </div>
      <div>
        <h2>{name}</h2>
      </div>
      <div className="gauge">
        <div className="gauge__body">
          <div
            className="gauge__fill"
            style={{
              backgroundColor: spinColor,
              transform: `rotate(${spin}turn)`,
            }}
          ></div>
          <div className="gauge__cover">{percentage}%</div>
        </div>
      </div>
    </div>
  );
}
