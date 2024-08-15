import Banner from "../components/banners";
import LandingPage from "../components/landingpage";
import Footer from "../components/footer"
import LoginForm from "../components/Login/LoginForm";
import Registration from "../components/Login/Registration";
export default function Home(){
    return (
        <>
          <div>
            <Banner />
          </div>
          <div>
            <Registration />
          </div>
          <div>
            <Footer />
          </div>
        </>
    )
}