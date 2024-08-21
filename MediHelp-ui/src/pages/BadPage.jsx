import {Outlet, Link} from "react-router-dom";

export default function  BadPage(){
    return (
        <>
        <h1>ERROR PAGE NOT FOUND</h1>
        <p>This page does not exist or you do not have proper access to it. Please return back to the home page.</p>
        <Link to="/home"><button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Home</button></Link>
        </>
    )
}