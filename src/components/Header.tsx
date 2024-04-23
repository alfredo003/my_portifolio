import React from "react";
import './header.css';

function Header(props:any){

return (
    <header>
    
       <div> 
        <h1 className="gradient">{props.title}</h1>
        <p>{props.subTitle}</p>
        </div>
       
    </header>
);
}

export default Header;