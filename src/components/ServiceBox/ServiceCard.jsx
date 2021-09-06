import React  from "react"; 
import "./ServiceBox.css";

 
  
  class Button extends React.Component {
    render() {
      return (
        <button className="button button-primary">
          <i className="fa fa-chevron-right"></i> Find out more
        </button>
      )
    }
  }
  
 
  
  class ServiceBox extends React.Component {
    constructor(props){
        super(props)
        
    }

    componentDidMount() {
       
    }

    componentWillUnmount(){
       
    }

   
    render() {
      return (
        <div className="main_card">
            <article className="card">
          
                <header  className="card-header">
                    <h4 className="card-header--title">Name Service</h4>
                </header>
                <div className="card-body">

                 
                    <h2>Service 1</h2>
                    <h2 className="body-content">Web Service delploiment</h2>
            
                    <button className="button button-primary">
                        <i className="fa fa-chevron-right"></i> Find out more
                    </button>
            
                </div>
           
            </article>
        </div>
      )
    }
  }
 
 
export default ServiceBox;