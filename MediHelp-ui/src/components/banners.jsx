
import logo from "../images/Logo.png"
import {Outlet, Link} from "react-router-dom";
import {MenuButton, Menu, MenuItems} from '@headlessui/react'

export default function Banner(){
    return (
        <div className="w-full ">
            <nav className="flex items-center justify-between around bg-gray-200 h-24 px-4 shadow-lg ">
                <div>
                <Link to="/home/"><img src={logo} alt="Logo" className=""width={150}/></Link>
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

