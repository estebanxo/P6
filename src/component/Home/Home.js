import banner from "../../assets/images/banniere_acceuil.jpg";
import "../../style/Home.scss";
import Header from "../Header";
import Footer from "../Footer";
import { useNavigate  } from "react-router-dom";
import {Outlet, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import Banner from "../Banner";

function Home() {
  const navigate = useNavigate();
  const [DataValue, setDataValue] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchHome() {
      try {
        const response = await fetch(`http://localhost:3000/data.json`);
        const dataValue = await response.json();
        setDataValue(dataValue);
      } catch (err) {
        setError(true)
      } 
    }
    fetchHome();
  }, []);

  if (error === true) {
    navigate("/404");
  }


  return (
    <div>
      <Header />
      <Banner img={banner} name="Chez vous, partout et ailleurs"/>
      <div className="FicheLogementContainer">
        {DataValue.map((obj) => (
          <Link key={`${obj.id}`} className="FicheLogementContainer__Link" to={`FicheLogement/${obj.id}`}>
            <figure id={`${obj.id}`} className="FicheLogementContainer__Figure">
              <img src={`${obj.cover}`} alt="" className="FicheLogementContainer__Img"></img>
              <figcaption className="FicheLogementContainer__Title"> {obj.title} </figcaption>
            </figure>
          </Link>
        ))}
        <Outlet/>
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;
