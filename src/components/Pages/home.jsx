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
          
                <div className="side-box">
                    <SideDrawer />
                </div>
                <div className="home-box">
                    <div className="intro-box">
                    <HomeIntro />
                    </div>
                    <div className="service-box">
                        <ServiceBox name="Web App Devlopment" />
                        <ServiceBox name="Database Design"/>
                        <ServiceBox name="Software Architecure" />
                        
                    </div>
                    <div className="service-box">
                        <ServiceBox name="Training your team" />
                        <ServiceBox name="Securing your Apps"/>
                        <ServiceBox name="Auditing your organisation"    />
                        
                    </div>
                    <div className="project-box">
                        <ServiceBox name="Project 1" />
                        <ServiceBox />
                        <ServiceBox />
                        
                    </div>
                    <div className="intro-box">
                    <HomeIntro />
                    </div>
                    <div className="intro-box">
                    <HomeIntro />
                    </div>
                    <div className="intro-box">
                    <HomeIntro />
                    </div>
                    <div className="intro-box">
                    <HomeIntro />
                    </div>
                </div>
                <div className="right-side-box">
                    <RightToolbar />
                </div>
            </div>
        )
    }
};

export default Home;


