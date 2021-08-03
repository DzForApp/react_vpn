import React from "react"
import './card.css'
import Clock from '../Clock'
 
 
class CardHeader extends React.Component {
    render() {
      const { image } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header style={style} id={image} className="card-header">
          <h4 className="card-header--title">{Clock.name}</h4>
        </header>
      )
    }
  }
  
  class Button extends React.Component {
    render() {
      return (
        <button className="button button-primary">
          <i className="fa fa-chevron-right"></i> Find out more
        </button>
      )
    }
  }
  
  class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
          <p className="date">March 20 2015</p>
          
          <h2>{this.props.title}</h2>
          
          <p className="body-content">{this.props.text}</p>
          <button className="button button-primary">
          <i className="fa fa-chevron-right"></i> Find out more
        </button>
          
        </div>
      )
    }
  }
  
  class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        }); 
    }
    render() {
        const { image } = this.props;
        var style = { 
            backgroundImage: 'url(' + 'https://source.unsplash.com/user/erondu/1000x1000' + ')',
        };
      return (
        <div className="main_card">
            <article className="card">
          
                <header style={style} id={image} className="card-header">
                    <h4 className="card-header--title">{this.props.name}</h4>
                </header>
                <div className="card-body">

                    <p className="date">{this.state.date.toLocaleDateString()}</p>
                    <h2>{this.props.title}</h2>
                    <h2 className="body-content">{this.state.date.toLocaleTimeString(this.props.country, 
                    {timeZone: this.props.timeZone})}</h2>
            
                    <button className="button button-primary">
                        <i className="fa fa-chevron-right"></i> Find out more
                    </button>
            
                </div>
           
            </article>
        </div>
      )
    }
  }

 export default Card;






 