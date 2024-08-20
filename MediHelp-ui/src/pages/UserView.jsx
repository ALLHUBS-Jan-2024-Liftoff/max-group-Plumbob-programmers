import Banner from "../components/banners";
import UserPage from "../components/userPage";
import Footer from "../components/footer";

export default function Home(){
    return (
        <>
          <div>
            <Banner />
          </div>
          <div>
            <UserPage/>
          </div>
          <div>
            <Footer />
          </div>
        </>
    )
}