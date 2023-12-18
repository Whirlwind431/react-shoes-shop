import { log } from "console";
import "./Title.css";
import { useState,useEffect } from "react";


function Title(): JSX.Element {

    const [title, setTitle] = useState('')


    useEffect(() => {
        setTitle('We are the best shoe shop ever!')
        console.log("hey");
        
    }, [])
    return (
        <div className="Title">
			<span>{title}</span>
        </div>
    );
}

export default Title;
