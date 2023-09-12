import banner from "../assets/images/banniere_apropos.jpg";
import "../style/APropos.scss";
import Header from "./Header";
import Banner from "./Banner";
import DropDown from "./DropDown";
import Footer from "./Footer";

function APropos() {
  return (
    <div className="APropos">
      <Header />
      <Banner img={banner}/>
      <div className="ContainerDropdown">
        <DropDown title="Fiabilité" content={["Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."]} />
        <DropDown title="Respect" content={["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."]} />
        <DropDown title="Service" content={["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."]} />
        <DropDown title="Sécurité" content={["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."]} />
      </div>
      <Footer />
    </div>
  );
}

export default APropos;
