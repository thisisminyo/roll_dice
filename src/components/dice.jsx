import React, { Component } from 'react';

class Dice extends Component {
    render() {
        return (
            <div>
                <div class="side front"></div>
                <div class="side top"></div>
                <div class="side left"></div>
                <div class="side right"></div>
                <div class="side bottom"></div>
                <div class="side back"></div>
            </div>
        );
    }
}

export default Dice;