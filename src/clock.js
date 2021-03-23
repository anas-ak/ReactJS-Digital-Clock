import React, { Component } from 'react';
import './clock.css'

export default class Clock extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString(),
            currDate: new Date().toLocaleDateString(),
            today: new Date().getDay()
        }
        // this.getDay = this.getDay.bind(this);
    }

    componentDidMount() {
        this.intervalID = setInterval(() => {
            this.updateClock()
        }, 1000)
    }

    componentWillMount() {
        clearInterval(this.intervalID);
    }

    updateClock() {
        this.setState(
            {
                time: new Date().toLocaleTimeString(),
                currDate: new Date().toLocaleDateString(),
                today: new Date().getDay()
            }
        )
    }
    /*
    getDay = (num) => {
        switch(num) {
            case 0: return 'Sunday'; break;
            case 1: return 'Monday'; break;
            case 2: return 'Tuesday'; break;
            case 3: return 'Wednesday'; break;
            case 4: return 'Thursday'; break;
            case 5: return 'Friday'; break;
            case 6: return 'Saturday'; break;
            default: return 'Uh Oh'; break;
        }
    }*/
    
    render() {
        
        return (
            <div>
                <div className="Time"> 
                    <p>{this.state.time}</p>
                </div>

                <div className="Date">
                    <p>{this.state.currDate}</p>
                </div>

                <div className="Day">
                    <p>{
                        this.state.today === 0 ? 'Sunday' : 
                        this.state.today === 1 ? 'Monday' : 
                        this.state.today === 2 ? 'Tuesday' : 
                        this.state.today === 3 ? 'Wednesday' : 
                        this.state.today === 4 ? 'Thursday' : 
                        this.state.today === 5 ? 'Friday' : 
                                                 'Saturday'
                                                 
                        //console.log(getDay(this.state.today))
                        }</p>   
                </div>
            </div>
        );
    }
}

//export default Clock;