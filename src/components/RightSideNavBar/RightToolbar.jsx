import React, { Component } from "react";
import { Link } from "react-router-dom";
import './RightToolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

class RightToolbar extends Component{
    
    render(){
        return(
            <header className="right-toolbar">
                <nav className="right-toolbar_navigation">
                    <div>
                        <DrawerToggleButton Click={this.props.DrawerClickHandler} />
                    </div>
                    <div  className="right-toolbar_logo"><a href="#">ٍSmartDev</a></div>
                    <div className="right-spacer"></div>
                    <div className="right-toolbar_navigation_items">
                    <ul >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/1">Quizz</Link>
                        </li>
                        <li>
                            <Link to="/2">World Clock</Link>
                        </li>
                    </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
export default RightToolbar;