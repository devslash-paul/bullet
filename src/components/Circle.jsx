import React from 'react'

export default class Circle extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            mouseX: 1,
            mouseY: 1
        }
    }

    componentDidMount = () => {
        window.addEventListener('mousemove', this.mouseMove);
    }

    mouseMove = (event) => {
        this.setState({
            mouseX: event.clientX,
            mouseY: event.clientY
        })
    }

    render() {
        const {change} = this.props;
        const {mouseX, mouseY} = this.state;
        
        const closestX = Math.round(mouseX / change) * change;
        const closestY = Math.round(mouseY / change) * change;;

        return (
            <g>
                <circle className="closest" cx={closestX} cy={closestY} r="2"/>
            </g>
        )
    }
}