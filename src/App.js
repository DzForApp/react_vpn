import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/NavBar/Toolbar';
 import Main from './components/Main/main';
import { Switch, Route, Link } from 'react-router-dom';
import SideDrawer from './components/SideDrawer/SideDrawer'
import BackDrop from './components/BackDrop/BackDrop';
import { Grid, Row, Col } from 'react-flexbox-grid';
import HomeIntro from './components/HomeIntro/HomeIntro';
import RightToolbar from './components/RightSideNavBar/RightToolbar';

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
     
  return (
    <div className="App">
      <Grid fluid>
        <Row>
          <Toolbar />
          
        </Row>
        <Row xs={12} md={3}>
         
          <Col xs={1}>
          </Col>
         
                  <Col xs={8} md={8}> 
                    <Main />
                  </Col>
         
           <Col xs={2}>
            
            </Col>
            
          
          
        </Row>
      </Grid>
    
    </div>
  );
  }
}

export default App;
