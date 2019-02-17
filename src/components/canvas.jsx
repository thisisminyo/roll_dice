import React, { Component } from 'react';

class Canvas extends Component {
    state = {
        animal_name: '',
        tags: [bunny, puppy, kitty, teddy, piggy, hammy]
    };

    render() {
        return (
            <div className="icons">
                <div className={this.getAnimalName()}></div>
            </div>
        );
    }

    getAnimalName() {
        let animal = "icons--";
    }
}

export default Canvas;