import React from "react"
import "./HomeIntro.css"
import intro from '../../images/intro3.png'

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
            <article className="intro">
          
                <div className="intro-body">

                    <p className="date">Hi I'm Radwan Azeroual</p>
                    <h2>Rdz</h2>
                    <h2 className="body-content"> Front-end Devloper</h2>
            
                    <button className="button button-primary">
                        <i className="fa fa-chevron-right"></i> Contact-us
                    </button>
            
                </div>
    
            
                <div   className="intro_img"> 
                 <img src={intro} height={600} width={700}  />
                
                </div>
              
           
            </article>
        </div>
      )
    }
  }

 export default HomeIntro;






 