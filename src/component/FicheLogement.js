import "../style/FicheLogement.scss";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function FicheLogement() {

  let params = useParams();
  let id = params.id;

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
  let TableauData = DataValue.filter(obj => obj.id === id);
  console.log(TableauData[0]);
  let Data = TableauData[0];
  console.log(Data);

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default FicheLogement;
