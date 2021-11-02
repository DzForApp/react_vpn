import React ,{Component} from "react";  
import './map.css';  
import {ReactComponent as Map} from "../../images/svg/map.svg";
import {ReactComponent as Netflix} from "../../images/svg/netflix.svg";
import {ReactComponent as Amazon} from "../../images/svg/amazon.svg";
import {ReactComponent as Reddit} from "../../images/svg/reddit.svg";
import {ReactComponent as Spotify} from "../../images/svg/spotify.svg";
import {ReactComponent as Discord} from "../../images/svg/discord.svg";

 

class Maps extends Component{
    render(){ 
        return(
                <div className="map_container"> 
                <div className="map_title">
                       <h2>Huge Global Network <br />of Fast VPN</h2>
                       <p>See LaslesVPN everywhere to make it easier for you when you move<br /> locations.</p>
                </div>
                       <div className="map">
                      <Map />  
                      </div>  
                      <div>
                          <Netflix  width="300" height="100"/>
                         
                          <Spotify  width="300" height="100"/>
                      </div>
                </div>
          
        )
    }
};

export default Maps;


