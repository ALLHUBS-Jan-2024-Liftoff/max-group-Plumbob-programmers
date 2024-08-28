import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, Link, useParams } from "react-router-dom";

export default function userPage() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { id } = useParams();

  useEffect(() => {
    userData();
  }, []);

  const userData = async () => {
    const result = await axios.get(`http://localhost:8080/users/${id}`);
    setUser(result.data);
  };

  return (
    <div>
      <div className="grid grid-col-4 grid-flow-col flex justify-center items-center py-4">
      <h1 className="row-start-1 text-4xl py-10">Viewing User:  {user.username}</h1>
        <h1 className="row-start-2 text-xl py-4">Username: {user.username}</h1>
        <h1 className="row-start-3 text-xl py-4">User's Email: {user.email}</h1>
        {/* <h1 className="row-start-4">{user.password}</h1> */}
      </div>
      <Link to={`/users/edit/${user.id}`}>
        <button className="absolute right-10 top-28 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
          Edit User
        </button>
      </Link>
    </div>
  );
}
