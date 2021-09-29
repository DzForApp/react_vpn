import React  from "react"; 
import "./PlanCard.css"; 

 
  
  
  class PlanCard extends React.Component {
  

    componentDidMount() {
       
    }

    componentWillUnmount(){
       
    }

   
    render() {
      return (
        <div className="plan_main">
             
              <div className="plan_body">
                    <div className="plan_icon">{this.props.Icon} </div>
                    <div className="plan_detail">
                    <h3>{this.props.num}</h3>
                    <p className="body-content">{this.props.name}</p>
                    </div>
                    
                </div>
           
        </div>
      )
    }
  }
 
 
export default PlanCard;