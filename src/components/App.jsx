import React from 'react';
import Grid from './Grid.jsx';
import Circle from './Circle.jsx';

export default class App extends React.Component {

    componentWillMount = () => {
        this.updateDimensions();
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.updateDimensions);
    }

    updateDimensions = () => {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    onClick = () => {
    }

    render = () => {
        const {height, width, mouseX, mouseY} = this.state;

        const change = 20;
        const coords = [];

        for(var x = change; x < width; x += change) {
            for(var y = change; y < height; y += change) {
                coords.push({
                    x,y
                })
            }
        }

        // const line = circles[selectedId] ? 
                // <line x1={circles[selectedId].props.cx} y1={circles[selectedId].props.cy} x2={mouseX} y2={mouseY}/> : undefined;
                const line = undefined;

        return (
            <svg height="100%" width="100%" onClick={this.onClick}>
                {line}
                {/* <text x="5" y="10"> */}
                    {/* {mouseX + ',' + mouseY} */}
                {/* </text> */}
                <Grid coords={coords}/>
                <Circle change={change} />
            </svg>
        )
    }
}