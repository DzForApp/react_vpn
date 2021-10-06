import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/NavBar/Toolbar';
 import Main from './components/Main/main';
  
 

class App extends Component{
 

  render(){
     
  return (
    
    <div className="App">
    <div className="main_container">
         <Toolbar />
          
         <Main />
    </div>   
    
    </div>
  );
  }
}

export default App;
