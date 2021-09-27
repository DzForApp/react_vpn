import React ,{Component} from "react"; 
import HomeIntro from "../HomeIntro/HomeIntro";
import './home.css'; 
import ServiceBox from "../ServiceBox/ServiceCard";
import SideDrawer from "../SideDrawer/SideDrawer";
import RightToolbar from "../RightSideNavBar/RightToolbar";

class Home extends Component{
    render(){
        return(
            <div className="title" >
          
                
                <div className="home-box">
                    <div className="intro-box">
                    <HomeIntro />
                    </div>
                    <div className="service-box">
                        <ServiceBox num="+90" name="Users" />
                        <ServiceBox num="+30" name="Locations"/>
                        <ServiceBox num="+50"  name="Servers"/>
                        
                    </div>
                    
                  
                </div>
               
            </div>
        )
    }
};

export default Home;


