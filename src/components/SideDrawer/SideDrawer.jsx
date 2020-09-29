import React, { Component } from "react";
import './SideDrawer.css';

class SideDrawer extends Component {
    render(){
  return(
        <nav className="side-drawer">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Skills</a></li>
            <li><a  href="#">Projects</a></li>

        </ul>
    </nav>
  )
    }
}
export default SideDrawer;