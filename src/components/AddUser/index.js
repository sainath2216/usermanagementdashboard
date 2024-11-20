import React from "react";
import "./index.css"; // Import the CSS file

const AddUser = ({ onAdd }) => {
  const onSubmitForm = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.email.value, e.target.text.value);
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.text.value = "";
  };

  return (
    <div>
      <form onSubmit={onSubmitForm} className="form-input">
        <div>
          <input placeholder="Name" name="name" required />
          <input placeholder="Email" name="email" />
          <input placeholder="Department" name="text" />
        </div>
        <div>
          <button type="submit" className="add-btn">
            Add
          </button>
        </div>
      </form>
      <hr />
    </div>
  );
};

export default AddUser;
