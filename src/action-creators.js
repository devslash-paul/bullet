import { GLOBAL_CLICK, RESIZE, GLOBAL_CLICK_UP } from "./actions";

import { closest } from "./utils.js";

export const globalClick = (event, coords) => {
  const closestCoord = closest(coords, event.clientX, event.clientY);
  return {
    type: GLOBAL_CLICK,
    payload: {
      x: closestCoord.x,
      y: closestCoord.y
    }
  }
}

export const clickUp = () => ({
  type: GLOBAL_CLICK_UP
})

export const resized = (width, height) => {
  type: RESIZE;
  payload: {
    width, height
  }
};
