import React from "react";
import "./Mc.css";

export default function Notcomp({ number, name, icon }) {
  return (
    <div className="notcompHolder">
      <div className="notIconHolder">{icon}</div>
      <div className="notRHS">
        <div className="notNumber">{number}</div>
        <div className="notName">{name}</div>
      </div>
    </div>
  );
}
