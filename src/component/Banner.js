import "../style/Banner.scss";

function Banner(props) {
    return (
        <div className="containerBanner">
            <img src={props.img} alt="" className="containerBanner__img" />
            <h1 className="containerBanner__title">{props.name}</h1>
        </div>
    );
}

export default Banner;