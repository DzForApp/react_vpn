import React from "react"
import './Clock.css'
 import Card from '../Card/Card'

class Clock extends React.Component {
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
        return(
            
            <div className="main_clock">
                
                <div className="city_clock">
                 
                 <h1>  {this.props.name}</h1>
                </div>
                <div className="city_clock">
                    <h3>{this.state.date.toLocaleTimeString(this.props.country, 
             {timeZone: this.props.timeZone})} </h3>
                </div>

              
            </div>
        )
    }

}

export default Clock;
