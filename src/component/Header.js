import logo from "../assets/images/logo/LOGO_kasa_header.png";
import logoLittle from "../assets/images/logo/LOGO_header_little.png";
import "../style/Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <header className="Header-header">
        <nav>
          <img src={logo} alt="La maison jungle" className="headerLogo" />
          <img
            src={logoLittle}
            alt="La maison jungle"
            className="headerLogoLittle"
          />
          <ul>
            <li>
              <NavLink id="LinkHome" to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink id="LinkAPropos" to="/APropos">A Propos</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
