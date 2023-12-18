import "./Brands.css";

function Brands(): JSX.Element {
    const shoesArray = [
        { id: 1, brand: 'Nike' },
        { id: 2, brand: 'Adidas' },
        { id: 3, brand: 'Puma' },
        { id: 4, brand: 'Reebok' },
        { id: 5, brand: 'New Balance' },
        { id: 6, brand: 'Vans' },
        { id: 7, brand: 'Converse' },
        { id: 8, brand: 'Under Armour' },
        { id: 9, brand: 'Asics' },
        { id: 10, brand: 'Skechers' }
    ];
    return (
        <div className="Brands">
            {shoesArray.map(shoe => <span key={shoe.id}>{shoe.brand} </span>)}
        </div>
    );
}

export default Brands;
