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
      
   const {reviewer_name, Icon, review} = this.props;
      return (
       <div className="customer_body">
                    <div className="customer_icon">{Icon} </div>
                    <div className="customer_detail">
                        <h3 >{reviewer_name}</h3>
                        
                      </div>
                       <div className="feature_listp">
                        
                            
                      </div>

                      <div className="customer_price">
                       < p className="customer_review">
                         {review}
                         </p>
                      </div>
                      <div className="btn_select">
                         
                      </div>

        </div>
       
      )
    }
  }
 
 
 
export default CustemerCard;