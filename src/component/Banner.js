import "../style/Banner.scss";

function Banner(props) {
    return (
        <div className="imageBanner">
            <img src={props.img} alt="" className="banner" />
            <h1 className="tittleAcceuil">{props.name}</h1>
        </div>
    );
}

export default Banner;