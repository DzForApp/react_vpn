import React ,{Component} from "react"; 
import HomeIntro from "../HomeIntro/HomeIntro";
import FeatureIntro from "../HomeIntro/FeatureIntro"
import './home.css'; 
import ServiceCard from "../ServiceBox/ServiceCard"; 
import {ReactComponent as Spacer} from "../../images/svg/spacer.svg";
import { ReactComponent as Location} from "../../images/svg/location.svg";
import { ReactComponent as User} from "../../images/svg/user.svg";
import { ReactComponent as Server} from "../../images/svg/Server.svg";
import {ReactComponent as Icons} from "../../images/svg/plan_icon.svg"; 
import PlanCard from "../PlanSection/PlanCard";

class Home extends Component{
    render(){
        const features1 = [{itemName: 'Unlimite Bandwitch'}, {itemName: 'Encrypted Connection'},
                          {itemName: 'Encrypted Connection'} ,{itemName: 'Encrypted Connection'}];
        const features2 =[{itemName: 'Unlimite Bandwitch'}, {itemName: 'Encrypted Connection'},
        {itemName: 'Encrypted Connection'} ,{itemName: 'Encrypted Connection'}];
        const features3 = [{itemName: 'Unlimite Bandwitch'}, {itemName: 'Encrypted Connection'},
                           {itemName: 'Encrypted Connection'} ,{itemName: 'Encrypted Connection'},
                           {itemName: 'Unlimite Bandwitch'}, {itemName: 'Encrypted Connection'},
                           {itemName: 'Encrypted Connection'} ,{itemName: 'Encrypted Connection'}];
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
                        <PlanCard num="Free Plan " price="Free" Icon={<Icons />}   items = {features1} />
                        
                        <PlanCard num="Standart Plan" price="$9 /mo" Icon={<Icons />} items = {features2} />
                       
                        <PlanCard num="Premium Plan"  price="$12 /mo"  Icon={<Icons />} items = {features3}/>

                    </div>
                  
                </div>
               
            </div>
        )
    }
};

export default Home;


