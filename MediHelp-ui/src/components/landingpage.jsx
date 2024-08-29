import logo from "../images/Logo.png"
import {Outlet, Link} from "react-router-dom";
export default function LandingPage(){
    return (
        <div className=" flex items-center">
            <section className="w-1/2  pl-48">
                <h1 className="text-5xl">Find and Schedule with ease of mind!</h1>
                <p>Look through our list of Government registered Hospitals and Clinics to find a place you can trust accepts both Medicare and Medicaid! </p>
            </section>
            <section className="w-1/2  ">
            <img src={logo} alt="Logo" className="pl-20" width={600}/>
            <Link to="/MainPage"><button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Find Clinic Now!</button></Link>
            </section>
        </div>

    )
}