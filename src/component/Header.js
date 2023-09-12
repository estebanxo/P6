import logo from "../assets/images/logo/LOGO_kasa_header.png";
import logoLittle from "../assets/images/logo/LOGO_header_little.png";
import "../style/Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <header className="Header-header">
        <nav className="navBar">
          <img src={logo} alt="La maison jungle" className="navBar__logo" />
          <img
            src={logoLittle}
            alt="La maison jungle"
            className="navBar__logoLittle"
          />
          <ul className="navBar__ul">
            <li className="navBar__li">
              <NavLink className="navBar__link" id="navBar__linkHome" to="/">Accueil</NavLink>
            </li>
            <li className="navBar__li">
              <NavLink className="navBar__link" id="navBar__linkAPropos" to="/APropos">A Propos</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
