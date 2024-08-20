import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';

export default function userPage(){

    const [user ,setUser] = useState({
        username: "",
        email: "",
        password: "",
        
    });

    const {id} = useParams();

    useEffect(() =>{
        userData();
    }, []);

    const userData = async () => {
        const result = await axios.get(`http://localhost:8080/users/${id}`);
        setUser(result.data);
    };


    return (
        <div>
        <div className='grid grid-col-4 grid-flow-col'>
            <h1 className='col-start-2'>{user.username}</h1>
            <h1 className='col-start-2'>{user.email}</h1>
            <h1 className='col-start-2'>{user.password}</h1>

            <h1 className='col-start-3 row-start-2'>New Username:</h1>
        </div>
        <button className='text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'>Edit User</button>  
        </div>
        
    )

}