import { Link } from "react-router-dom";

function affichages(tous) {
  return (
    <div>
      for (let projet of tous)
      {
        <Link to="/FicheLogement/:${projet.id}">
          <figure id="${projet.id}">
            <img src="${projet.cover}" alt=""></img>
            <figcaption> ${projet.title} </figcaption>
          </figure>
        </Link>
      }
    </div>
  );
}

export default affichages;
