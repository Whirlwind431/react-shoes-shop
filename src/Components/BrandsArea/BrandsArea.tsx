import ShoesCard from "../Layout/Home/ShoesCard/ShoesCard";
import "./BrandsArea.css";
import Adidas from '../Layout/Home/ShoesCard/img/adidas.jpeg'
import NewBalance from '../Layout/Home/ShoesCard/img/new balance.jpeg'
import Nike from '../Layout/Home/ShoesCard/img/nike.jpeg'
import Puma from '../Layout/Home/ShoesCard/img/puma.jpeg'
import Reebok from '../Layout/Home/ShoesCard/img/reebok.jpeg'

function BrandsArea(): JSX.Element {
    return (
        <div className="BrandsArea">
            <ShoesCard brand="Adidas" size={36} price={20} img={Adidas} />
            <ShoesCard brand="New Balance" size={32} price={25} img={NewBalance} />
            <ShoesCard brand="Nike" size={34} price={28} img={Nike} />
            <ShoesCard brand="Puma" size={40} price={35} img={Puma} />
            <ShoesCard brand="Reebok" size={42} price={45} img={Reebok} />
        </div>
    );
}

export default BrandsArea;
