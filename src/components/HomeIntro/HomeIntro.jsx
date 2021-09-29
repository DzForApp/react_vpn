import React from "react"
import "./HomeIntro.css"
import {ReactComponent as Intro} from '../../images/svg/hello.svg'

 class HomeIntro extends React.Component {
   

    componentDidMount() {
       
    }

    componentWillUnmount(){
    }

    render() {        
         
      return (
        <div className="main_intro">
           
           
                  <div className="intro_text">
                       
                      <h2 className="intro_title">Want anything to be<br />easy with LaslesVPN</h2>
                      <p className="intro_subtitle">Provide a network for all your needs with ease and fun using LaslesVPN<br />  discover interesting features from us.
                        </p>
                      <button className="intro_btn ">Get Started</button>
                  </div>
                      
                  <div   className="intro_img"> 
                    <Intro />
                  </div>
           
        </div>
      )
    }
  }

 export default HomeIntro;






 