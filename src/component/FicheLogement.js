import "../style/FicheLogement.scss";
import Header from "./Header";
import Slideshow from "./Slideshow";
import DropDown from "./DropDown";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import Star from "../assets/icones/Star.png";

function FicheLogement() {
  
  const navigate = useNavigate();
  let params = useParams();

  const [logements, setLogements] = useState([]);
  const [logement, setLogement] = useState(null);
  const [error, setError] = useState(false);
  const [rateColor, setColor] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/data.json")
    .then((response) => response.json())
    .then((data) => {
      setLogements(data);
    })
    .catch((error) => {
      console.log(error);
      setError(true);
    })
  }, []);

  useEffect(() => {
    // Si la liste des logements est vide => on n'a pas encore récupéré les données
    if (logements.length === 0) {
      return;
    }

    const logement = logements.find((element) => element.id === params.id);

    if (logement) {
      setLogement(logement);
      console.log(logement.rating)
    } else {
      // Si on ne trouve pas le logement c'est qu'il n'existe pas dans les données => on redirige vers la page 404
      navigate("/404");
    }
  }, [logements, params.id, navigate]);
  

  if (error === true) {
    navigate("/404");
  }

  return (
    <div>
      <Header />
      {logement &&
        <div className="container">
          
          <Slideshow array={logement.pictures} />

          <div className="containerLeftAndRight">
            <div className="containerLeft">
              <div className="containerInfos">
                <h1 className="containerInfos__title">{logement.title}</h1>
                <p className="containerInfos__location">{logement.location}</p>
              </div>

              <div className="containerTags">
                {logement.tags.map((obj, index) => (
                  <span className="containerTags__tags" key={`${obj}-${index}`}>{obj}</span>
                ))}
              </div>
            </div>

            <div className="containerRight">
              <div className="host">
                <p className="host__nameHost">{logement.host.name}</p>
                <img src={logement.host.picture} alt="" className="host__hostImg" />
              </div>
              <div className="containerStars">
                {[...Array(5)].map((star, index) => {
                  const currentRate = index + 1;
                  return (
                    <label className="containerStars__stars">
                      <input key={`${star}, ${index}`} type="radio" name="rate" value={currentRate} />
                      <i className={currentRate <= (rateColor || logement.rating) ? "fa-solid fa-star fa-xl red" : "fa-solid fa-star fa-xl gray"} />
                    </label>
                  )
                })}
              </div>
              
            </div>
          </div>

          <div className="containerDropDownF">
            <DropDown title="Description" content={[logement.description]} />
            <DropDown title="Équipements" content={logement.equipments} />
          </div>
        </div>
      }
      <Footer />
    </div>
  );
}

export default FicheLogement;
