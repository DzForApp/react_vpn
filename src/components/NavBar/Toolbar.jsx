import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

class Toolbar extends Component{
    
    render(){
        return(
            <header className="toolbar">
                <nav className="toolbar_navigation">
                    <div>
                        <DrawerToggleButton Click={this.props.DrawerClickHandler} />
                    </div>
                    <div  className="toolbar_logo"><a href="#">ٍSmartDev</a></div>
                    <div className="spacer"></div>
                    <div className="toolbar_navigation_items">
                    <ul >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/1">Skills</Link>
                        </li>
                        <li>
                            <Link to="/2">Projects</Link>
                        </li>
                    </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
export default Toolbar;