import React ,{Component} from "react"; 
import  Home  from "../Pages/home" // import our pages
import  Page1 from '../Pages/page1' // import our pages
import  Page2  from '../Pages/page2' // import our pages
import { Route } from 'react-router-dom';
 import "./main.css";
 
class Main extends Component{
    render(){
        return(
            <div className="main-container">
            <switch >

      <Route exact path='/' component={Home} />
      <Route exact path='/1' component={Page1}/>
      <Route exact path='/2' component={Page2} />
      
            </switch>
            </div>
        )
    }
};
export default Main;