

import React  from "react"; 
import "./btn.css";  
 
  
  
  class Btn extends React.Component {
    
   
    render() {
     
      return (
        <div className="btn_container">
            <button className="singin_btn">{this.props.btnName}</button>
        </div>
       
      )
    }
  }

 
export default Btn;