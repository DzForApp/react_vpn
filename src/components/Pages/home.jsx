import React ,{Component} from "react"; 
import HomeIntro from "../HomeIntro/HomeIntro";
import FeatureIntro from "../HomeIntro/FeatureIntro"
import './home.css'; 
import ServiceCard from "../ServiceBox/ServiceCard"; 
import {ReactComponent as Spacer} from "../../images/svg/spacer.svg";
import { ReactComponent as Location} from "../../images/svg/location.svg";
import { ReactComponent as User} from "../../images/svg/user.svg";
import { ReactComponent as Server} from "../../images/svg/Server.svg";
import PlanSection from "../PlanSection/PlanSection";

class Home extends Component{
    render(){
        return(
            <div className="title" >
          
                
                <div className="home_box">
                    <div className="home_intro"> 
                    <HomeIntro />
                    </div>
                    <div className="service_box">
                        <ServiceCard num="+90" name="Users" Icon={<User />}/>
                       <Spacer />
                        <ServiceCard num="+30" name="Locations" Icon={<Location />}/>
                        <Spacer />
                        <ServiceCard num="+50"  name="Servers" Icon={<Server />}/>
                        
                    </div>
                    <div className="feature_intro"> 
                    <FeatureIntro />
                    </div>
                    <div className="plan_section"> 
                    <PlanSection />
                    </div>
                  
                </div>
               
            </div>
        )
    }
};

export default Home;


