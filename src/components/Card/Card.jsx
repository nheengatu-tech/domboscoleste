import React from "react";
import star from '../../images/starOnlyTest.png'

const Card = (props) => {
    return <>
        <div style={{ borderRadius: "10px", margin: "20px", height: "40vh", maxWidth: "350px", width:"30%", boxShadow: "5px 5px 15px 5px #000000", backgroundColor: "white", display: "flex", flexDirection: "column", alignContent: "center" }}>
            <div style={{ height: "50px", width: "50px", borderRadius: "100px", backgroundColor: "gray", top: "-25px", alignSelf: "center", position: "relative" , display:"flex", justifyContent:"center", alignItems:"center"}}>
                <img src={star} alt={"starIcon"} style={{
            width: "40px",
            maxWidth: "40px",
            height: "auto",
            margin: "auto"
          }} />
            </div>
            <span style={{fontWeight:"bold"}}>{props.title}</span>
            {props.children}
        </div>
    </>;
};

export default Card;
