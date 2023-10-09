import data from "./data.json"
import React from "react";

function Display(data) {
  return (
    <div>
      <li>name : {data.name}</li>
      <li>age : {data.age}</li>
      <li>place : {data.place}</li>
    </div>
  );
}

export default Display;
