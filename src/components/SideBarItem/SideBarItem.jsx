import React from "react";

export default function SideBarItem({ name, img }) {
  return (
    <button className="d-flex gap-2 align-items-center ">
      <img src={img} alt="" />
      <p>{name}</p>
    </button>
  );
}
