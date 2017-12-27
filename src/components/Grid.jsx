import React from 'react'

export default class Grid extends React.PureComponent {
    render() {
        const {coords} = this.props;

        const circles = [];

        let id = 0;
        for(var i = 0; i < coords.length; i++) {
            circles.push(<circle key={id} cx={coords[id].x} cy={coords[id].y} r="1"/>)
            id ++;
        }

        return (
            <g>
                {circles}
            </g>
        )
    }
}