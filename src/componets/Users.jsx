import React from "react";
import { userlist } from "./usersData.js";

export default function Users() {
  console.log("oke", userlist);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Stt</th>
            <th>Name</th>
            <th>Age</th>
            <th>Date of Birth</th>
            <th>Manage</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>

        <tbody>
          {userlist.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.dateOfBirth}</td>
              <td>{user.mange}</td>
              <td>
                <i className="fa-solid fa-trash-can"></i>
              </td>
              <td>
                <i className="fa-regular fa-pen-to-square"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
