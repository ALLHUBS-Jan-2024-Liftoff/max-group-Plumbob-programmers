import { useEffect, useState } from "react"
import axios from "axios"
import {Outlet, Link} from "react-router-dom";

export default function Users(){
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
      useEffect(() =>{
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:8080/users");
                setData(response.data);
                console.log(data)
            }  catch (error) {
                setError(error); 
                console.error('Error fetching data:', error);
            }
        }
        fetchUsers();
 
      },[]);

      const handleClick = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/users/${id}`
              
            );
            console.log('User has been deleted', response.data)
            alert("User has been successfully deleted")
            window.location.reload();
        } catch (error){
            console.error('Error deleting user: ', error);
        }

        // console.log(id)

      }
      
      return (
        <>
        <table className="table-auto justify-self-center">
            <thead>
                <tr >
                    <th className="px-16">ID</th>
                    <th className="px-16">Username</th>
                    <th className="px-16">Email</th>
                    <th className="px-16">Action</th>
                </tr>
            </thead>
            <tbody>
                
           {data.map((item, index) =>(
            
                <tr key={index} >
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    
                    <td>
                        <Link to={`/users/${item.id}`}><button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">View</button></Link>
                        <button onClick={() => handleClick(item.id)}className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button></td>
                </tr>
                
            
           ))}
           
           </tbody>
        </table>
        </>
      )
}