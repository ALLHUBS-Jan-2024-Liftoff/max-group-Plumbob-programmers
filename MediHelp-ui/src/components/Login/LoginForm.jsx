import React, { useState } from 'react';
import {Outlet, Link} from "react-router-dom";

const loginform = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', loginData);
    
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h2 className='text-gray-800 text-center text-2xl font-bold'>Login</h2>
      <div className='w-40 mb-8 mx-auto block py-10'>
        <div>
          <label>Email</label>
          <input
          className='class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"'
            type="email"
            name="email"
            value={loginData.email}
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
      <button type="submit" className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Login</button>
    </form>
    {/* <Link to="/register"><button className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Don't have an account? Register Now!</button></Link> */}
    </>
  );
};

export default loginform;