import React from 'react';
import Grid from './Grid.jsx';

export default class App extends React.Component {

    componentWillMount = () => {
        this.updateDimensions();
    }

    mouseMove = (event) => {
        this.setState({
            mouseX: event.clientX,
            mouseY: event.clientY
        })
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.updateDimensions);
        window.addEventListener('mousemove', this.mouseMove);
    }

    updateDimensions = () => {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    render = () => {
        const {height, width, mouseX, mouseY} = this.state;

        const change = 20;
        const circles = [];
        var id = 0;

        const numRows = height / change;
        const numCols = width / change;

        const closestRow = Math.max(Math.round(mouseX/ change) - 1, 0);
        const closestCol = Math.max(Math.round(mouseY /change) - 1, 0);
    
        let row = 0;
        let col = 0;
        let selectedId;
        const coords = [];

        for(var x = change; x < width; x += change) {
            for(var y = change; y < height; y += change) {
                const thisId = id;
                const selected = closestRow == (row) && closestCol == (col) ;

                if (selected) {
                    selectedId = thisId;
                }
                
                const className = selected ? "closest" : "";
                coords.push({
                    x,y
                })
                col++;
                id += 1;
            }
            row++
            col = 0;
        }

        // const line = circles[selectedId] ? 
                // <line x1={circles[selectedId].props.cx} y1={circles[selectedId].props.cy} x2={mouseX} y2={mouseY}/> : undefined;
                const line = undefined;

        return (
            <svg height="100%" width="100%">
                {line}
                {/* <text x="5" y="10"> */}
                    {/* {mouseX + ',' + mouseY} */}
                {/* </text> */}
                <Grid coords={coords}/>
            </svg>
        )
    }
}