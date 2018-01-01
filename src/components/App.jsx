import React from 'react';
import Grid from './Grid.jsx';
import Circle from './Circle.jsx';
import { globalClick } from '../action-creators.js'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends React.Component {

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
            <svg height="100%" width="100%" onClick={this.props.globalClick}>
                {line}
                <Grid coords={coords}/>
                <Circle change={change} />
            </svg>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        globalClick: (e) => {
            dispatch(globalClick(e))
        }
    }
}

export default connect(undefined, mapDispatchToProps)(App)