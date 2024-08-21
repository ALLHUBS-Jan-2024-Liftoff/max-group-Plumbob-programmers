import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function userPage() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { id } = useParams();

  const { username, email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    userData();
  }, []);

  const onSave = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/users/edit/${id}`,
        user
      );
      console.log("Response:", response);
      // window.location.href = "/Admin";
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const userData = async () => {
    const result = await axios.get(`http://localhost:8080/users/${id}`);
    setUser(result.data);
  };

  return (
    <div>
      <h1 className="text-4xl">Edit User </h1>
      <div className="grid grid-col-4 grid-flow-col">
        <form onSubmit={(e) => onSave(e)}>
          <div className="">
            <label htmlFor="Username">
              <h1 className="text-2xl">Username</h1>
              <input
                type={"text"}
                name="username"
                placeholder={username}
                value={username}
                onChange={(e) => onChange(e)}
                className="h-12 border-4 border-hidden border-indigo-600 bg-indigo-100 shadow-2xl"
              />
            </label>
          </div>
          <div>
            <label htmlFor="Email">
              <h1 className="text-2xl">Email</h1>
              <input
                type={"text"}
                name="email"
                placeholder={email}
                value={email}
                onChange={(e) => onChange(e)}
                className="h-12 border-4 border-none border-indigo-600 bg-indigo-100 shadow-2xl"
              />
            </label>
          </div>
          <div>
            <label htmlFor="Password">
              <h1 className="text-2xl">Password</h1>
              <input
                type={"text"}
                name="password"
                placeholder={password}
                value={password}
                onChange={(e) => onChange(e)}
                className="h-12 border-4 border-none border-indigo-600 bg-indigo-100 shadow-2xl"
              />
            </label>
          </div>

          <button
            type="submit"
            className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
