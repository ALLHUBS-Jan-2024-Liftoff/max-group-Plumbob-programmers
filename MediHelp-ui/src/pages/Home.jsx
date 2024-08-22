import Banner from "../components/banners";
import LandingPage from "../components/landingpage";
import Footer from "../components/footer"

export default function Home(){
    return (
        <>
          <div>
            <Banner />
          </div>
          <div>
            <LandingPage/>
          </div>
          <div>
            <Footer />
          </div>
        </>
    )
}