import React, { Component } from 'react';
import "./App.css"
import Toggle from '../Toggle';
import Card from '../Card/Card'; 
import App from '../../App';

class ClockApp extends Component{
 

  render(){
    
  return (
    <div className="AppClock">
     <Toggle />
        <div className="Card_Container">
        
        <Card  name="NZ Time:"  country={"en-NZ"} timeZone={"Pacific/Chatham"} />
        <Card name="DZ Time:" country={"en-GB"}   timeZone={"Europe/London"}/>
        <Card name="US Time:"  country={"en-US"}  timeZone={"America/New_York"} />
        </div>

    </div>
  );
  }
}

export default ClockApp;
