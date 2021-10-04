import React  from "react"; 
import "./CustemerCard.css"; 
import {ReactComponent as CheckIcon} from "../../images/svg/feat_icon.svg";
import Btn from "../btn/btn";
 
  
  
  class CustemerCard extends React.Component {
   
    componentDidMount() {
       
    }

    componentWillUnmount(){
       
    }
   
   
    render() {
      let itemsToRender;
      return (
       <div className="customer_body">
                    <div className="customer_icon">{this.props.Icon} </div>
                    <div className="customer_detail">
                        <h3 >{this.props.num}</h3>
                        
                      </div>
                       <div className="feature_listp">
                         <p>{this.review}</p>
                            
                      </div>

                      <div className="customer_price">
                       < p className="customer_review">
                         {this.children}
                         </p>
                      </div>
                      <div className="btn_select">
                         
                      </div>

        </div>
       
      )
    }
  }
 
 
 
export default CustemerCard;