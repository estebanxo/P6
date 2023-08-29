import banner from "../assets/images/banniere_apropos.jpg";
import "../style/APropos.scss";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";

function APropos() {
  return (
    <div>
      <Header />
      <Banner img={banner} name=""/>
      <Footer />
    </div>
  );
}

export default APropos;
