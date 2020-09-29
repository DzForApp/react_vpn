import React, { Component } from "react";

import './DrawerToggleButton.css';


const DrawerToggleButton = props =>(

    <button className="toggle-button" onClick={props.Click} >
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
    </button>
);
export default DrawerToggleButton;