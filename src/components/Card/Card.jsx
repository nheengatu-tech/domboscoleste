import React from "react";
import  { FaStar as Star } from 'react-icons/fa';
import "./style.css";

const Card = (props) => {
    return <>
        <div className="card">
            <div className="star-box">
                <Star alt={"starIcon"} className="star"/>
            </div>
            <h1>{props.title}</h1>
            {props.children}
        </div>
    </>;
};

export default Card;
