import React, { Component } from 'react';

class Canvas extends Component {

    /*
    createCanvas = () => {
        let canvas = []
        let pixels = []

        //create pixels
        for (let i = 0; i < 400; i++) {
            pixels.push(<div class="pixel"></div>)
        }
        //create canvas and add pixels
        canvas.push(<div class="canvas">{pixels}</div>)

        return canvas
    }
    */

    render() {
        return (
            <div className="icons">
                <div className="icons--rabbit"></div>
            </div>
        );
    }
}

export default Canvas;