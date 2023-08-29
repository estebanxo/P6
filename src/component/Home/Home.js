import banner from "../../assets/images/banniere_acceuil.jpg";
import "../../style/Home.scss";
import Header from "../Header";
import Footer from "../Footer";
import {Outlet, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import Banner from "../Banner";

function Home() {
  const [DataValue, setDataValue] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchHome() {
      try {
        const response = await fetch(`http://localhost:3000/data.json`);
        const dataValue = await response.json();
        setDataValue(dataValue);
      } catch (err) {
        console.log(err);
        setError(true)
      } 
    }
    fetchHome();
  }, []);

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }


  return (
    <div>
      <Header />
      <Banner img={banner} name="Chez vous, partout et ailleurs"/>
      <div className="FicheLogementContainer">
        {DataValue.map((obj) => (
          <Link key={`${obj.id}`} className="FicheLogementLink" to={`FicheLogement/${obj.id}`}>
            <figure id={`${obj.id}`} className="FicheLogementFigure">
              <img src={`${obj.cover}`} alt="" className="FicheLogementImg"></img>
              <figcaption className="FicheLogementTitle"> ${obj.title} </figcaption>
            </figure>
          </Link>
        ))};
        <Outlet/>
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;
