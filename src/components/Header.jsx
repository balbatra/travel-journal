import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header>
                <FontAwesomeIcon icon={faEarthAsia} className="header-logo" />
                <h1 className="header-title">my travel journal.</h1>
        </header>
    );
}

export default Header;