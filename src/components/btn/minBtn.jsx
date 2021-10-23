

import React  from "react"; 
import "./minBtn.css";  
 
  
  
  class Mbtn extends React.Component {
    
   
    render() {
     
      return (
        <div className="mbtn_container">
            <button className="ml_btn"></button>
            <button className="m_btn"></button>
            <button className="m_btn"></button>
            <button className="m_btn"> </button>
        </div>
       
      )
    }
  }

 
export default Mbtn;