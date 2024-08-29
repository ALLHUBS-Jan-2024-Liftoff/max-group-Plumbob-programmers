import React, { useState } from 'react';
import {Outlet, Link} from "react-router-dom";
import axios from "axios";

const loginform = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login Data:', loginData);
    await axios.post("http://localhost:8080/auth/login", loginData)
    window.location.href = '/';
    alert('Successfully logged in');
    
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h2 className='text-gray-800 text-center text-2xl font-bold'>Login</h2>
      <div className='w-40 mb-8 mx-auto block py-10'>
        <div>
          <label>Username</label>
          <input
          className='class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"'
            type="username"
            name="username"
            value={loginData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
          className='class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"'
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>
      </div>  
      <div className=" flex justify-center items-center bg-opacity-20 p-8">
      <button type="submit" className='text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800'>Login</button>
      <Link to="/register">Don't have an account?<button className='text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'>Register Now!</button></Link>
      </div>
    </form>

    </>
  );
};

export default loginform;