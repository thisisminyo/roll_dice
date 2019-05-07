import React, { Component } from "react";
import Canvas from "./canvas";

class Dice extends Component {
    render() {
        const animals = [
            { side: "front", face: "bunny" },
            { side: "top", face: "puppy" },
            { side: "left", face: "kitty" },
            { side: "right", face: "teddy" },
            { side: "bottom", face: "piggy" },
            { side: "back", face: "hammy" }
        ];
        const items = [];

        for (const [index, value] of animals.entries()) {
            items.push(
                <div key={index}>
                    <div className={"side " + value.side}>
                        <Canvas value={value.face} />
                    </div>
                    <div className={"side " + value.side + " inner"} />
                </div>
            );
        }

        return (
            <div className="dice">
                {items}
                <div className="side cover y" />
                <div className="side cover x" />
                <div className="side cover z" />
            </div>
        );
        /*
        <div id="dice">
            <div class="side front" />
            <div class="side front inner" />
            <div class="side top" />
            <div class="side top inner" />
            <div class="side right" />
            <div class="side right inner" />
            <div class="side left" />
            <div class="side left inner" />
            <div class="side bottom" />
            <div class="side bottom inner" />
            <div class="side back" />
            <div class="side back inner" />
            <div class="side cover x" />
            <div class="side cover y" />
            <div class="side cover z" />
        </div>;
        */
    }
}

export default Dice;
