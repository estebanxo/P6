import "../style/Slideshow.scss";
import vector from "../assets/images/logo/Vector.png";
import { useState } from "react";

function Slideshow(array) {
    const [Id, setId] = useState(0);
    let tableau = array.array;
    let nbrImg = tableau.length;
    console.log(tableau[0]);
    console.log(nbrImg);

    const prevSlide = () => {
        const isFirstSlide = Id === 0;
        const newId = isFirstSlide ? nbrImg - 1 : Id - 1;
        setId(newId);
    }

    const nextSlide = () => {
        const isLastSlide = Id === nbrImg - 1;
        const newId = isLastSlide ? 0 : Id + 1;
        setId(newId);
    }

    return (
        <div className="carousel">
            <div
                style={{backgroundImage: `url(${tableau[Id]})`}}
                className="carousel__item"
            >
                <img className="vector carousel__item__left" src={vector} alt="" onClick={prevSlide} />
                <img className="vector carousel__item__right" src={vector} alt="" onClick={nextSlide} />
            </div>
            <p className="carousel__countImg">{Id+1}/{nbrImg}</p>
            
        </div>
    );
}

export default Slideshow;