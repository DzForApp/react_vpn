import React from "react"
import "./FeatureIntro.css"
import {ReactComponent as Intro} from '../../images/svg/feature.svg'
import {ReactComponent as CheckIcon} from "../../images/svg/check.svg";


 class FeatureIntro extends React.Component {
   

    componentDidMount() {
       
    }

    componentWillUnmount(){
    }

    render() {        
         
      return (
        <div className="main_intro">
           
           
                   <div   className="intro_img"> 
                    <Intro />
                  </div>
                  <div className="intro_text">
                       
                      <h2 className="intro_title">We Provide Many<br />Feature You Can Use</h2>
                      <p className="intro_subtitle">You can explore the features that we provide with fun <br /> 
                       and have their own functions each feature.
                       </p>
                      <div className="feature_list">
                        <ul>
                          <li>
                            <CheckIcon /><p>Powerfull online protection.</p>
                          </li>
                          <li>
                            <CheckIcon /><p>Internet without borders.</p>
                          </li>
                          <li>
                            <CheckIcon /><p>Supercharged VPN</p>
                          </li>
                          <li>
                            <CheckIcon /><p>No specific time limits.</p>
                          </li>
                          </ul>
                      </div>
                  </div>
                      
                  
           
        </div>
      )
    }
  }

 export default FeatureIntro;






 