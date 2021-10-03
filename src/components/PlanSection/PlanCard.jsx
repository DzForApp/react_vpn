import React  from "react"; 
import "./PlanCard.css"; 
import {ReactComponent as CheckIcon} from "../../images/svg/feat_icon.svg";
import Btn from "../btn/btn";
 
  
  
  class PlanCard extends React.Component {
   
    componentDidMount() {
       
    }

    componentWillUnmount(){
       
    }
   
   
    render() {
      let itemsToRender;
      return (
       <div className="plan_body">
                    <div className="plan_icon">{this.props.Icon} </div>
                    <div className="plan_detail">
                        <h3 >{this.props.num}</h3>
                        
                      </div>
                       <div className="feature_listp">
                          <ul>
                          
                            <FeatureList features = {this.props.items} />
                              
                          </ul>
                      </div>

                      <div className="plan_price">
                        <h3 className="body_content">{this.props.price}</h3>
                      </div>
                      <div className="btn_select">
                        <Btn  btnName="Select"/>
                      </div>

        </div>
       
      )
    }
  }

  function FeatureList(props) {
    const features = props.features;
    const listItems = features?.map((feature) =>
      <li className="feature_listL">
         <CheckIcon />
        <p>{feature.itemName}</p>
      </li>
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
 
 
export default PlanCard;