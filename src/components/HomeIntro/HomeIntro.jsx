import React from "react"
import "./HomeIntro.css"
import intro from '../../images/svg/mainsvg.svg'

 class HomeIntro extends React.Component {
    constructor(props){
        super(props)
        this.state = {date: new Date()};
    }

    componentDidMount() {
       
    }

    componentWillUnmount(){
    }

    render() {        
         
      return (
        <div className="main_intro">
            <div className="intro">
          
                <div className="intro-body">
                  <div className="intro-text">
                       
                      <h3>Want anything to be</h3>
                      <h2 className="front-text">easy with LaslesVPN</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Et, volutpat feugiat placerat lobortis. <br />Natoque rutrum semper sed suspendisse nunc lectus.</p>
                      <button className="intro-btn btn-yellow ">Get Started</button>
                  </div>
                      
                  <div   className="intro_img"> 
                    <img src={intro} height={450} width={450}  />
                  </div>
                </div>
    
          
            </div>
        </div>
      )
    }
  }

 export default HomeIntro;






 