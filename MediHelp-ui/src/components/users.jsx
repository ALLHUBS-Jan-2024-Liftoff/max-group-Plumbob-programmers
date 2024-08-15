import { useEffect, useState } from "react"
import axios from "axios"

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
            const response = await axios.delete("http://localhost:8080/users",{
                params: {id : id}
            }
              
            );
            console.log('User has been deleted', response.data)
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
                    <td><button onClick={() => handleClick(item.id)}className="select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Delete</button></td>
                </tr>
                
            
           ))}
           
           </tbody>
        </table>
        </>
      )
}