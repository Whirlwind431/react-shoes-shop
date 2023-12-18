import "./ShoesCard.css";

interface ShoeCardProps {
    brand: string;
    size: number;
    price: number;
    img: string;
}
function ShoesCard(props: ShoeCardProps): JSX.Element {
    return (
        <div className="ShoesCard ">
            <span className="spanShoeCard"><br />Brand: {props.brand}<br /> Size: {props.size}<br /> Price: {props.price}$ <br /><img src={props.img} className="imgShoeCard"/></span>
        </div>
    );
}

export default ShoesCard;
