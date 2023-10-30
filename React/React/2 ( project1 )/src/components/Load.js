import React from "react";
import datas from "./load.json";

function Load() {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        {datas.data.map((ele) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{ele.id}</th>
                <td>{ele.name}</td>
                <td>{ele.city}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Load;
