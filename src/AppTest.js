import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import Toggle from './components/Toggle';
import Carde from './components/Card/Card'; 

class AppTest extends Component{
 

  render(){
    
  return (
    <div className="App">
     <Toggle />
        <div className="Card_Container">
        
        <Carde  name="NZ Time:"  country={"en-NZ"} timeZone={"Pacific/Chatham"} />
        <Carde name="DZ Time:" country={"en-GB"}   timeZone={"Europe/London"}/>
        <Carde name="US Time:"  country={"en-US"}  timeZone={"America/New_York"} />
        </div>

    </div>
  );
  }
}

export default AppTest;
