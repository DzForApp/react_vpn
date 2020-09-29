import React ,{Component} from "react"; 
import { Link } from 'react-router-dom';

class NavBar extends Component{
    render(){
        return(
        
        <React.Fragment>
            
            <nav class="navbar navbar-expand-lg navbar-light bg-info">
  

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <form class="form-inline my-2 my-lg-0">
  <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
    </form>

    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/1">Page1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/2">Page2</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    
  </div>
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
</nav>
            
        </React.Fragment>
        )
    }
};
export default NavBar;