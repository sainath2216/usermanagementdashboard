import React from "react";
import User from "../User";
import "./index.css";

const UserList = ({ users, onDelete, onEdit }) => {
  return (
    <div className="list-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              department={user.department}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
