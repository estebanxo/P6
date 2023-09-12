import ErrorLogo from "../assets/images/logo/404grand.png";
import ErrorLogoLittle from "../assets/images/logo/404petit.png";
import Header from "./Header";
import Footer from "./Footer";
import "../style/404.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="containerErr">
      <Header />
      <div className="errorContainer">
        <img src={ErrorLogo} alt="" className="errorContainer__logo" />
        <img src={ErrorLogoLittle} alt="" className="errorContainer__logoLittle" />
        <p className="errorContainer__pError">Oups! La page que vous demandez n'existe pas.</p>
        <Link className="errorContainer__link" to="/">Retourner sur la page d’accueil</Link>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
