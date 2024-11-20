import React, { useState, useEffect } from "react";

import "./index.css"

const EditUser = ({ user, onSave, onCancel }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setDepartment(user.department || ""); 
    }
  }, [user]);

  const handleSave = () => {
    onSave(user.id, name, email, department);
  };

  return (
    <div className="edit-form">
      <h3>Edit User</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        placeholder="Department"
      />
      <button className="btn-save" onClick={handleSave}>Save</button>
      <button className="btn-cancel" onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditUser;
