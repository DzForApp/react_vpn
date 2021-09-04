import React ,{Component} from "react"; 
import HomeIntro from "../HomeIntro/HomeIntro";
import './home.css';
import SideDrawer from "../SideDrawer/SideDrawer";

class Home extends Component{
    render(){
        return(
            <div className="title" >
            <SideDrawer />
            <HomeIntro />
           
            </div>
        )
    }
};

export default Home;


