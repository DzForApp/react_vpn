import React from "react"
import PlanCard from "./PlanCard";
import "./PlanCard.css"; 
import {ReactComponent as Icons} from "../../images/svg/plan_icon.svg"; 
 
  class PlanSection extends React.Component {
    
    render() {
      const features = [{itemName: 'Unlimited Bandwitch'}, {features: 'Unlimited Bandwitch 2'}];
      return (
        <div className="main_plan">
          <div>
            <h2>Choose Your Plan</h2>
            <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
          </div>
          <div className="plan_list">
                        <PlanCard num="Free Plan " name="Users" Icon={<Icons />} items = {features}/>
                        
                        <PlanCard num="Standart Plan" name="Locations" Icon={<Icons />} />
                       
                        <PlanCard num="Premium Plan"  name="Servers"  Icon={<Icons />}/>

                        </div>
        </div>
      )
    }
  }

 export default PlanSection;






 