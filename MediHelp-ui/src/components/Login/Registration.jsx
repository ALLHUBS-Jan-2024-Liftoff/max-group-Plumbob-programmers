import React, { useState } from 'react';
import axios from "axios";
import {Outlet, Link} from "react-router-dom";

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Registration Data:', formData);
    await axios.post("http://localhost:8080/register", formData)
    window.location.href = '/';
    alert('Successfully registered');
    
  };

  return (
    <form onSubmit={handleSubmit} className='p-8 rounded-2xl bg-white shadow'>
      <h2 className='text-gray-800 text-center text-2xl font-bold'>Register</h2>
      <div className='w-40 mb-8 mx-auto block py-10'>
        <div>
          <label>Username</label>
          <input
          className='class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"'
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
          className='class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"'
            type="email"
            name="email"
            value={formData.email}
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
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        </div>
        <div className='flex justify-center items-center bg-opacity-20 p-8'>
      <button type="submit" className='text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800'>Register</button>
      <Link to="/"><button className='text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900'>Cancel</button></Link>
      </div>
    </form>
  );
};

export default Registration;