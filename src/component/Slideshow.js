import "../style/Slideshow.scss";
import { useState } from "react";

function Slideshow(array) {
    const [Id, setId] = useState(0);
    let tableau = array.array;
    let nbrImg = tableau.length;
    console.log(tableau);
    console.log(nbrImg);
    // return (
    //     // <div className="carrousel">
    //     //     {array.map((picture) => (
    //     //         setId() +1,
    //     //         <div style={{backgroundImage: `url(${picture})`}} key={Id}></div>
    //     //     ))}
    //     // </div>
    // );
}

export default Slideshow;