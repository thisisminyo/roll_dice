import React, { Component } from "react";

class Canvas extends Component {
    render() {
        return (
            <div className="icons">
                <div className={"icons--" + this.props.value} />
            </div>
        );
    }
}

export default Canvas;
