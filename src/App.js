import React, { useEffect, useState } from "react";
import "./App.css";

import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (name, email, department) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        department: department,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(users.filter((user) => user.id !== id));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onEdit = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setEditingUser(userToEdit);
  };

  const onSave = async (id, name, email) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            name: name,
            email: email,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      if (res.status !== 200) {
        console.error("Failed to update user");
        return;
      }

      const updatedUser = await res.json();
      setUsers((users) =>
        users.map((user) =>
          user.id === id
            ? { ...user, name: updatedUser.name, email: updatedUser.email }
            : user
        )
      );
      setEditingUser(null);
    } catch (err) {
      console.error("Error saving user:", err);
    }
  };

  const onCancel = () => {
    setEditingUser(null);
  };

  return (
    <div className="App">
      <h1 className="main-heading">
        User Management <span className="style">Dashboard</span>
      </h1>
      <AddUser onAdd={onAdd} />
      {editingUser ? (
        <EditUser user={editingUser} onSave={onSave} onCancel={onCancel} />
      ) : (
        <UserList users={users} onDelete={onDelete} onEdit={onEdit} />
      )}
    </div>
  );
};

export default App;
