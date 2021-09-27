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
  

    componentDidMount() {
       
    }

    componentWillUnmount(){
       
    }

   
    render() {
      return (
        <div className="main_card">
            <article className="card">
              <div className="card-body">

                    <i>icons</i>
                    <h2>{this.props.num}</h2>
                    <p className="body-content">{this.props.name}</p>
             
                </div>
           
            </article>
        </div>
      )
    }
  }
 
 
export default ServiceBox;