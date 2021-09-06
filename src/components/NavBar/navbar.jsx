import React ,{Component} from "react"; 
import { Link } from 'react-router-dom';
import './navbar.css';

class NavBar extends Component{
    render(){
        return(
        
        <React.Fragment>
            
            <nav className="navbar">
  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
 
   <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/1">Page1</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/2">Page2</Link>
      </li>
       
       
    </ul>
    
  </div>
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
</nav>
            
        </React.Fragment>
        )
    }
};
export default NavBar;