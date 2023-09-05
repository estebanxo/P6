import "../style/DropDownAPropos.scss";
import { useState } from "react";

function DropDownAPropos(props) {
    const [isChecked, setIsChecked] = useState(false);

    const handleOnClick = () => {
        setIsChecked(!isChecked);
    };


    return (
        <div className="ContentBx" >
            <button type="button" className={isChecked === true ? "Label openLabel" : "Label"} onClick={handleOnClick}>
                <span>{props.title}</span>
                <i class={isChecked === true ? "fa-solid fa-chevron-up open" : "fa-solid fa-chevron-up"}></i>
            </button>
            <div className="Content">
                {props.content.map((obj) => (
                    <p>{obj}</p>
                ))}
            </div>
        </div>
    );
}

export default DropDownAPropos;