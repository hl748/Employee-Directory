import React from "react";

function Table (props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Image</th>
        </tr>
      </thead>
      
      <tbody>
        {props.children}
        {props.children[0]}
        {props.children[1]}
        {props.children[2]}
        {props.children[3]}
        {props.children[4]}
        {props.children[5]}
        {props.children[6]}
        {props.children[7]}
      </tbody>
    </table>
  );
}
export default Table;
