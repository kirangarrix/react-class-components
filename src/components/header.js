import React from "react";
import '../styles/styles.css';


const Header=(props)=> {


    console.log(props);
      
    return (
      <div className="header">
        <h1>NEWS TODAY </h1>
        <input onChange={props.keywords} />
      </div>
    );
  
}

export default Header;
