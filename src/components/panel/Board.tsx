import React from "react";
import './style-tree.css'

const Board = () => {
    return (
        <div>
            <svg
                className=""
                ref={(ref: SVGSVGElement) => (ref = ref)}
                width="100"
                height="100"
            ></svg>
        </div>
    );
};

export default Board;
