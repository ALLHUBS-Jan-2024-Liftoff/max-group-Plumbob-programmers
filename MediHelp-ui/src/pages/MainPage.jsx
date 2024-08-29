import {Outlet, Link} from "react-router-dom";
import Banner from "../components/banners";
import Footer from "../components/footer";
import ClinicData from "../components/ClinicData";
<<<<<<< HEAD

=======
>>>>>>> 3550b99 (Fetched External API data)
export default function MainPage(){
    return    (   
    <>
    <div>
      <Banner />
    </div>
     <div>
     <ClinicData/>
     </div>
    <div>
      <Footer />
    </div>
  </>
    )
}