import "./Footer.css";

function Footer(): JSX.Element {
    function currentYear(): number {
        const date = new Date()
        const currentYear = date.getFullYear()
        console.log(currentYear);
        return currentYear
    }

    return (
        <div className="Footer">
            <span>©️ {currentYear()} Whind-Sport-Shoes</span>
        </div>
    );
}

export default Footer;
