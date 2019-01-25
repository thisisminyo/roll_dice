import React, { Component } from 'react';
import Canvas from './canvas';

class Dice extends Component {
    render() {
        return (
            <div className="dice">
                <div className="side front"><Canvas /></div>
                <div className="side top"></div>
                <div className="side left"></div>
                <div className="side right"></div>
                <div className="side bottom"></div>
                <div className="side back"></div>
            </div>
        );
    }
}

export default Dice;