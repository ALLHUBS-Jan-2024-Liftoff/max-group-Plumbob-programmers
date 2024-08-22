import {Outlet, Link} from "react-router-dom";
import Banner from "../components/banners";
import Footer from "../components/footer";
import ClinicData from "../components/ClinicData";

import Users from '../components/users';
export default function MainPage(){
    return    (   
    <>
    <div>
      <Banner />
    </div>
     <div>
     <Users />
     </div>
    <div>
      <Footer />
    </div>
  </>
    )
}