import ErrorLogo from "../assets/images/logo/404grand.png";
import ErrorLogoLittle from "../assets/images/logo/404petit.png";
import Header from "./Header";
import Footer from "./Footer";
import "../style/404.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="container">
      <Header />
      <div className="ErrorContainer">
        <img src={ErrorLogo} alt="" className="ErrorLogo" />
        <img src={ErrorLogoLittle} alt="" className="ErrorLogoLittle" />
        <p className="pError">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
        
      </div>
      
      <Footer />
    </div>
  );
}

export default Error;
