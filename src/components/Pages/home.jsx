import React ,{Component} from "react"; 
import HomeIntro from "../HomeIntro/HomeIntro";
import './home.css'; 
import ServiceBox from "../ServiceBox/ServiceCard";
import SideDrawer from "../SideDrawer/SideDrawer";

class Home extends Component{
    render(){
        return(
            <div className="title" >
          
                <div className="side-box">
                    <SideDrawer />
                </div>
                <div className="home-box">
                    <div className="intro-box">
                    <HomeIntro />
                    </div>
                    <div className="service-box">
                        <ServiceBox />
                        <ServiceBox />
                        <ServiceBox />
                        
                    </div>
                    <div className="intro-box">
                    <HomeIntro />
                    </div>
                    <div className="intro-box">
                    <HomeIntro />
                    </div>
                </div>
            </div>
        )
    }
};

export default Home;


