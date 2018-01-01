import React from 'react';
import Grid from './Grid.jsx';
import Circle from './Circle.jsx';
import FollowingLine from './Line.jsx';
import { globalClick, clickUp } from '../action-creators.js'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currentX: 0,
            currentY: 0
        }
    }

    componentWillMount = () => {
        this.updateDimensions();
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.updateDimensions);
    }

    updateMouse = (e) => {
        this.setState(state => ({currentX: e.clientX, currentY: e.clientY}));
    }

    updateDimensions = () => {
        this.setState(state => ({width: window.innerWidth, height: window.innerHeight}));
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

        return (
            <svg 
                height="100%" 
                width="100%" 
                onMouseDown={e => this.props.globalClick(e, coords)}
                onMouseUp={this.props.clickUp}
                >
                <FollowingLine anchorX={this.props.x} anchorY={this.props.y}/>
                <Grid coords={coords}/>
                <Circle change={change} />
            </svg>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        globalClick: (e, coords) => {
            dispatch(globalClick(e, coords))
        },
        clickUp: () => {
            dispatch(clickUp())
        }
    }
}

const mapStateToProps = state => {
    return {
        x: state.entities.lines.lastClick.x,
        y: state.entities.lines.lastClick.y
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)