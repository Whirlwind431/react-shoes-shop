import "./Header.css";
import Title from "./Title/Title";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <h2>Welcome to our shoes shop!</h2>
            <Title />
        </div>
    );
}

export default Header;
