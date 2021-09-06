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
              <div className="card-body">

                 
                    <h2>{this.props.name}</h2>
                    <p className="body-content">More description</p>
            
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