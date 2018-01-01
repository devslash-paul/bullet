import React from 'react';

export default class FollowingLine extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    componentDidMount = () => {
        window.addEventListener('mousemove', this.updateMouse);
    }

    updateMouse = e => {
        this.setState(state => ({
            followingX: e.clientX,
            followingY: e.clientY
        }))
    }

    render() {
        const { followingX, followingY } = this.state;
        const { anchorX, anchorY } = this.props;
        return <line x1={followingX} y1={followingY} x2={anchorX} y2={anchorY} />
    }
}
