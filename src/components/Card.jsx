import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Card = (props) => {



    return (
        <div className="card">
            <div className="card--image-container">
                <img className="card--image" src={props.imageUrl} alt={props.title} />
            </div>
            <div className="card--info">
                <div className="card--location-info">
                    <div className="card--location-container">
                        <FontAwesomeIcon className="card--location-icon" icon={faLocationDot} />
                        <h2 className="card--location">{props.location}</h2>
                    </div>
                    <a className="card--maps-url" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h3 className="card--title">{props.title}</h3>
                <p className="card--date">{`${props.startDate} - ${props.endDate} `}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    );
}

export default Card;