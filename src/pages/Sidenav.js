import { NavData } from "./NavData";
import React, { useState } from "react";
import Picture from "../pictures/rightArrow.png";
import p0 from "../pictures/home.png";
import p1 from "../pictures/explore.png";
import p2 from "../pictures/analytics.png";
import p3 from "../pictures/settings.png";

export default function Sidenav() {
  const [open, setopen] = useState(true);
  const toggleOpen = () => {
    setopen(!open);
  };
  return (
    <div className={open ? "sidenav" : "sidenavClosed"}>
      <button className="menuBtn" onClick={toggleOpen}>
        <img className="p1" src={Picture} />
      </button>
      {NavData.map((item) => {
        return (
          <div key={item.id} className="sideitem">
            <img className="p1" src={p0} />
            <span className="linkText">{item.text}</span>
          </div>
        );
      })}
    </div>
  );
}
