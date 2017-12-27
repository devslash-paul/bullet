import React from 'react';

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

    render = () => {
        const {height, width} = this.state;
        const change = 17;
        const circles = [];
        var id = 0;
    
        for(var x = 10; x < width - change; x += change) {
            for(var y = 10; y < height - change; y += change) {
                circles.push(<circle key={id++} cx={x} cy={y} r="1"/>)
            }
        }

        return (
            <svg height="100%" width="100%">
                {circles}
            </svg>
        )
    }
}