import React, { Component } from "react";
import '../styles/styles.css'

// const Header = () => {
//     return (
//         <div>
//             <h1>Hello </h1>
//             <input/>
//         </div>
//     )
// }

class Header extends Component {
 
  render() {
      
    return (
      <div className="header">
        <h1>NEWS TODAY </h1>
        <input />
      </div>
    );
  }
}

export default Header;
