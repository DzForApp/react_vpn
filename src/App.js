import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './components/NavBar/Toolbar';
 import Main from './components/Main/main';
import { Switch, Route, Link } from 'react-router-dom';
import SideDrwaer from './components/SideDrawer/SideDrawer'
import BackDrop from './components/BackDrop/BackDrop';

class App extends Component{
  state ={
    sideDrawerOpen :false
  };

  darwerToggleClickHandler = () =>{
    this.setState =((prevStat)=>{
      return{sideDrawerOpen : !prevStat.sideDrawerOpen}
    });
  };

  render(){
    let sidedrawer;
    let backdrop;

    if(this.state.sideDrawerOpen) {
      sidedrawer =<SideDrwaer />;
      backdrop =<BackDrop />
    }
  return (
    <div className="App">
      <Toolbar DrawerClickHandler ={this.props.darwerToggleClickHandler}/>
      
      <main style={{marginTop : "55px"}}>
      <Main />
      </main>
       
    </div>
  );
  }
}

export default App;
