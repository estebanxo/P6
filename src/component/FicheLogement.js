import "../style/FicheLogement.scss";
import Header from "./Header";
import Slideshow from "./Slideshow";
import DropDown from "./DropDown";
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

  
  console.log(DataValue);

  let TableauDataId = DataValue.filter(obj => obj.id === id);
  console.log(TableauDataId);


  const [data, setData] = useState("");
  const [picture, setPicture] = useState({});
  const [title, setTitle] = useState({});
  const [location, setLocation] = useState({});
  const [rating, setRating] = useState({});
  const [tags, setTags] = useState([]);
  const [host, setHost] = useState({});
  const [description, setDescription] = useState({});
  const [equipments, setEquipments] = useState([]);

  async function retrieveData() {
    let dataValue = await TableauDataId[0];
    setData(dataValue);
    console.log(data);

    let picture = data.pictures;
    setPicture(picture);

    const title = data.title;
    console.log(title);
    setTitle(title);

    const location = data.location;
    console.log(location)
    setLocation(location);

    const rating = data.rating;
    console.log(rating);
    setRating(rating);

    const tags = data.tags;
    console.log(tags);
    setTags(tags);

    const host = data.host;
    console.log(host);
    setHost(host);

    const description = data.description;
    console.log(description);
    setDescription(description);

    const equipments = data.equipments;
    console.log(equipments);
    setEquipments(equipments);
  }
  retrieveData();
  

  if (data === "") navigate("/404");
  
  if (error) navigate("/404");

  return (
    <div>
      <Header />
      <div className="container">
        
        <Slideshow array={picture} />

        <div className="containerLeftAndRight">
          <div className="containerLeft">
            <div className="containerInfos">
              <h1 className="title">{title}</h1>
              <p className="location">{location}</p>
            </div>

            <div className="containerTags">
              {tags.map((obj, index) => (
                <span key={`${obj}-${index}`}>{obj}</span>
              ))}
            </div>
          </div>

          <div className="containerRight">
            <div className="host">
              <p className="nameHost">{host.name}</p>
              <img src={host.picture} alt="" className="hostImg" />
            </div>
            <div className="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
          </div>
        </div>

        <div className="containerDropDown">
          <DropDown title="Description" content={[description]} />
          <DropDown title="Équipements" content={equipments} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default FicheLogement;
