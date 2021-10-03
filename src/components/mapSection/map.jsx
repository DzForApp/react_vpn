import React ,{Component} from "react";  
import './map.css';  
import {ReactComponent as Map} from "../../images/svg/map.svg";
 

class Maps extends Component{
    render(){ 
        return(
                <div className="map_section"> 
                       <h1>Huge Global Network of Fast VPN</h1>
                       <h3>See LaslesVPN everywhere to make it easier for you when you move locations.</h3>  
                      <Map />  
                </div>
          
        )
    }
};

export default Maps;


