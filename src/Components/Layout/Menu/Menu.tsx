import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/brands">Our Brands</NavLink>
            <NavLink to="/stories_of_successful">Our Success</NavLink>
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/employees">Emploees</NavLink>
        </div>
    );
}

export default Menu;
