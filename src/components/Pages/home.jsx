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
import {ReactComponent as Reviewer} from "../../images/svg/reviewer.svg"; 
import PlanCard from "../PlanSection/PlanCard";
import Maps from "../mapSection/map";
import CustemerCard from "../CustomerSection/CustemerCard";
import Btn from "../btn/btn";

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
        const customer =[{itemName: 'Unlimite Bandwitch'}, {itemName: 'Encrypted Connection'},
        {itemName: 'Encrypted Connection'}];
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
                    <div className="plan_title">
                        <h2>Choose Your Plan</h2>
                        <p>Let's choose the package that is best for you and explore it happily and <br />cheerfully.</p>
                    </div>
                    <div className="plan_cards">
                        <PlanCard num="Free Plan " price="Free" Icon={<Icons />}   items = {features1} />
                        
                        <PlanCard num="Standart Plan" price="$9 /mo" Icon={<Icons />} items = {features2} />
                       
                        <PlanCard num="Premium Plan"  price="$12 /mo"  Icon={<Icons />} items = {features3}/>
                        </div>
                    </div>
                    <div className="map_section">
                        <Maps />
                    </div>
                    <div className="customer_section"> 
                    <div className="customer_title">
                        <h2>Trusted by Thousands of <br /> Happy Customer</h2>
                        <p>These are the stories of our customers who have joined us <br /> with great pleasure when using this crazy feature.</p>
                    </div>
                    <div className="customer_cards">
                        <div className="customer_card_list">
                        <CustemerCard num="Viezh Robert " reviewer_name={"Warsaw, Poland"} Icon={<Reviewer />}   review="Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best." />
                        <CustemerCard num="Yessica Christy " reviewer_name={"Yessica Christy"} Icon={<Reviewer />}   review="“I like it because I like to travel far and still can connect with high speed.”" />
                        <CustemerCard num="Kim Young Jou " reviewer_name={"Kim Young Jou"} Icon={<Reviewer />}   review="“This is very unusual for my business that currently requires a virtual private network that has high security.”"/>
                        </div>
                         <div className="sub_cards">
                             <Btn />
                             <Btn />
                         </div>
                        </div>
                    </div>
                    <div className="subscrib_section">
                      
                        <div className="subscrib_text">
                       
                       <h2 className="subscrib_title">Subscribe Now for<br /> Get Special Features!</h2>
                       <p className="subscrib_subtitle"><b>LaslesVPN</b> is a private virtual network that <br />has unique features and has high security. </p>
                       
                       </div>
                       
                        <div   className="subscrib_img"> 
                            <button id="btn-sub" className="intro_btn ">Subscrib Now</button>
                        </div>

                    </div>
                    <footer className="footer_section">
                        <div>Logo</div>
                        <div>
                            <ul>
                                <lh>Product</lh>
                                <li>Download</li>
                                <li>Pricing</li>
                                <li>Locatino</li>
                                <li>Server</li>
                                <li>Countries</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <lh>Engage</lh>
                                <li>LaslesVPN ? </li>
                                <li>FAQ</li>
                                <li>Tutorials</li>
                                <li>About Us</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                                 
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <lh>Earn Money</lh>
                                <li>Affiliate</li>
                                <li>Become Partner</li>
                                
                                 
                            </ul>
                        </div>
                    </footer>
                  
                </div>
               
            </div>
        )
    }
};

export default Home;


