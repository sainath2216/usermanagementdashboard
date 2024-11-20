import React from "react";

import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import "./index.css";

const User = ({ id, email, name, department, onDelete, onEdit }) => {
  const onClickDelete = () => {
    onDelete(id);
  };

  const onClickEdit = () => {
    onEdit(id); 
  };

  return (
    <>
      <tr>
      <td>{id}</td>
      <td>{name.split(" ")[0]}</td>
      <td>{name.split(" ")[1] }</td>
      <td>{email}</td>
      <td>{department || "N/A"}</td>
      <td>
        <div className="btn-container">
          <button onClick={onClickEdit} className="edit-btn">
            <FaEdit className="icons" />
          </button>
          <button onClick={onClickDelete} className="delete-btn">
            <MdDelete className="icons" />
          </button>
        </div>
      </td>
    </tr>
    </>
  );
};

export default User;
