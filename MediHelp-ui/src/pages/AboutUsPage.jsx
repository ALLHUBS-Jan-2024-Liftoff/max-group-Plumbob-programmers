import {Outlet, Link} from "react-router-dom";
import Banner from "../components/banners";
import Footer from "../components/footer";
import ClinicData from "../components/ClinicData";
import AboutUs from "../components/AboutUs";
export default function MainPage(){
    return    (   
    <>
    <div>
      <Banner />
    </div>
     <div>
     <AboutUs/>
     </div>
    <div>
      <Footer />
    </div>
  </>
    )
}