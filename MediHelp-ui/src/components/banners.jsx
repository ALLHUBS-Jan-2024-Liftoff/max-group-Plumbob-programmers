
import logo from "../images/navbarLogo.png"
import {Outlet, Link} from "react-router-dom";

export default function Banner(){
    return (
        <div className="w-full ">
            <nav className="flex items-center justify-between around bg-gray-200 h-24 px-4 shadow-lg ">
                <div>
                <Link to="/home/"><img src={logo} alt="Logo" className=""width={150}/></Link>
                </div>
                <div>
                <Link to="/Admin"><button className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-500 dark:text-purple-500 dark:hover:text-white dark:hover:bg-purple-600 dark:focus:ring-purple-800">Admin</button></Link>
                </div>
                <div>
                <Link to="/login"><button className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Login</button></Link>
                </div>
            </nav>
        </div>
    )
}

