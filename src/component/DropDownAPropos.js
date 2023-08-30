import "../style/DropDownAPropos.scss";
import { useState } from "react";

function DropDownAPropos(props) {
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };


    return (
        <div className="ContentBx" >
            <label for={props.title} className="Label">
                <span>{props.title}</span>
                <i class={isChecked === true ? "fa-solid fa-chevron-up open" : "fa-solid fa-chevron-up"}></i>
            </label>
            <input className="checkbox" type="checkbox" name={props.title} id={props.title} checked={isChecked} onChange={handleOnChange} />
            <div className="Content">
                {props.content.map((obj) => (
                    <p>{obj}</p>
                ))}
            </div>
        </div>
    );
}

export default DropDownAPropos;