import "../style/DropDown.scss";
import { useState } from "react";
import verctorFermer from "../assets/icones/VectorFermer.png";

function DropDown(props) {
    const [isChecked, setIsChecked] = useState(false);

    const handleOnClick = () => {
        setIsChecked(!isChecked);
    };


    return (
        <div className="ContentBx" >
            <button type="button" className={isChecked === true ? "Label openLabel" : "Label"} onClick={handleOnClick}>
                <span>{props.title}</span>
                <img src={verctorFermer} alt="" className={isChecked === true ? "chevron open" : "chevron"} />
            </button>
            <div className="Content">
                {props.content.map((obj, index) => (
                    <p className="content__p" key={`${obj}, ${index}`}>{obj}</p>
                ))}
            </div>
        </div>
    );
}

export default DropDown;