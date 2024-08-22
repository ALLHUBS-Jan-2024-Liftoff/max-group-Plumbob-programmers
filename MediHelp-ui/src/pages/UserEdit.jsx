import Banner from "../components/banners";
import Footer from "../components/footer";
import EditUserPage from "../components/EditUserPage";

export default function Home() {
  return (
    <>
      <div>
        <Banner />
      </div>
      <div>
        <EditUserPage/>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
