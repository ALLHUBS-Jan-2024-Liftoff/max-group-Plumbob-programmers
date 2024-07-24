
import logo from "../images/Logo.png"
import {Outlet, Link} from "react-router-dom";
<<<<<<< HEAD
import {MenuButton, Menu, MenuItems} from '@headlessui/react'
=======
>>>>>>> 21d0380 (Routing start completed)

export default function Banner(){
    return (
        <div className="w-full ">
            <nav className="flex items-center justify-between around bg-gray-200 h-24 px-4 shadow-lg ">
                <div>
<<<<<<< HEAD
                <Link to="/home/"><img src={logo} alt="Logo" className=""width={150}/></Link>
=======
                <Link to="/home/"><img src={logo} alt="Logo" height={50} width={150}/></Link>
                </div>
                <div>
                <Link to="/login"><button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button></Link>
>>>>>>> 21d0380 (Routing start completed)
                </div>
                <Menu>
                <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img alt="" src={logo} className="h-14 w-14 rounded-full" />
                </MenuButton>
                <MenuItems
                transition
                      className="absolute right-10 top-16 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                 >
                    <Link to="/login"><button className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">Login</button></Link>
                    <Link to="/register"><button className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">Register</button></Link>
                    <Link to="/MainPage"><button className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">Find a Clinic</button></Link>
                    <Link to="/Admin"><button className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">Admin</button></Link>  
                </MenuItems>     
                </Menu>
            </nav>
        </div>
    )
}

