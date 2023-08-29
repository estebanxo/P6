import ErrorLogo from "../assets/images/logo/404grand.png";
import ErrorLogoLittle from "../assets/images/logo/404petit.png";
import Header from "./Header";
import Footer from "./Footer";

function Error() {
  return (
    <div>
      <Header />
      <img src={ErrorLogo} alt="" className="ErrorLogo" />
      <img src={ErrorLogoLittle} alt="" className="ErrorLogoLittle" />
      <Footer />
    </div>
  );
}

export default Error;
