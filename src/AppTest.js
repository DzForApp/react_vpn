import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import Toggle from './components/Toggle';
 

class AppTest extends Component{
 

  render(){
    
  return (
    <div className="App">
        <div className="Clock_Container">
        <Clock  name="NZ Time:"  country={"en-NZ"} timeZone={"Pacific/Chatham"}/>
        <Clock name="DZ Time:" country={"en-GB"}   timeZone={"Europe/London"} />
        <Clock name="US Time:"  country={"en-US"}  timeZone={"America/New_York"} />
        </div>
        <Toggle />

    </div>
  );
  }
}

export default AppTest;
