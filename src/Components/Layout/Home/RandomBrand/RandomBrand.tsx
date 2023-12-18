import { useState, useEffect } from "react";
import "./RandomBrand.css";

function RandomBrand(): JSX.Element {
    const shoesArray = [
        { id: 1, brand: 'Nike' },
        { id: 2, brand: 'Adidas' },
        { id: 3, brand: 'Puma' },
        { id: 4, brand: 'Reebok' },
        { id: 5, brand: 'New Balance' },

    ];
    const [brand, setBrand] = useState('')

    
    
    useEffect(() => {
        setInterval(() => {
            const randomIndex = (Math.floor(Math.random() * shoesArray.length))
            setBrand(shoesArray[randomIndex].brand)
            // console.log(shoesArray[randomIndex].brand);
        }, 1000)
    }, [])

    return (
        <div className="RandomBrand Box">
            <span>Brand is: {brand}</span>
        </div>
    );
}

export default RandomBrand;
