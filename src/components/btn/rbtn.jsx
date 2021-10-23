

import React  from "react"; 
import "./rbtn.css";  
 
  
  
  class Rbtn extends React.Component {
    
   
    render() {
     
      return (
        <div className="rbtn_container">
            <button className="r_btn"><i class="arrow left"></i></button>
            <button className="r_btn"><i class="arrow right"></i></button>
        </div>
       
      )
    }
  }

 
export default Rbtn;