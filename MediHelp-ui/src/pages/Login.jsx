import Banner from "../components/banners";
import LandingPage from "../components/landingpage";
import Footer from "../components/footer"
import LoginForm from "../components/Login/LoginForm";
export default function Home(){
    return (
        <>
          <div>
            <Banner />
          </div>
          <div>
            <LoginForm />
          </div>
          <div>
            <Footer />
          </div>
        </>
    )
}