export const closest = (coords, x, y) => {
    let minDistance = 1000000000
    let min = -1;
    for(var i = 0; i < coords.length; i++) {
        let xdiff = coords[i].x - x;
        let ydiff = coords[i].y - y;
        let line = Math.sqrt(Math.pow(xdiff, 2) + Math.pow(ydiff, 2))

        if (line < minDistance) {
            min = i;
            minDistance = line;
        }
    }

    return coords[min]
}