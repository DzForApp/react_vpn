import React from "react"
import PlanCard from "./PlanCard";
import "./PlanCard.css"; 
 
  class PlanSection extends React.Component {
    render() {
       
      return (
        <div className="main_plan">
          <div>
            <h2>Choose Your Plan</h2>
            <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
          </div>
          <div className="plan_list">
                        <PlanCard num="+90" name="Users" Icon=""/>
                        
                        <PlanCard num="+30" name="Locations" Icon=""/>
                       
                        <PlanCard num="+50"  name="Servers" Icon=""/>

                        </div>
        </div>
      )
    }
  }

 export default PlanSection;






 