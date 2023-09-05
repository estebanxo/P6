import "../style/FicheLogement.scss";
import Header from "./Header";
import Slideshow from "./Slideshow";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";

function FicheLogement() {
  
  const navigate = useNavigate();
  let params = useParams();
  let id = params.id;

  const [DataValue, setDataValue] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchLogement() {
      try {
        const response = await fetch(`http://localhost:3000/data.json`);
        const dataValue = await response.json();
        setDataValue(dataValue);
      } catch (err) {
        console.log(err);
        setError(true)
      } 
    }
    fetchLogement();
  }, []);

  // function data() {
  //   try {
  //     let TableauDataId = DataValue.filter(obj => obj.id === id);
  //     let Data = TableauDataId[0];
  //   } catch (error) {
  //     console.log(error);
  //     setError(true)
  //   }
  // }
  // data();
  console.log(DataValue);
  let TableauDataId = DataValue.filter(obj => obj.id === id);
  console.log(TableauDataId);
  let Data = TableauDataId[0];
  console.log(Data);
  const [Picture, setPicture] = useState();

  async function pictures() {
    let data = await Data;
    console.log(data);
    let picture = await data.pictures;
    setPicture(picture);
  }
  pictures();
  console.log(Picture);

  if (Data === undefined) navigate("/404");
  
  if (error) navigate("/404");

  return (
    <div>
      <Header />
      <div className="container">
        <Slideshow array={Picture} />
      </div>
      <Footer />
    </div>
  );
}

export default FicheLogement;
