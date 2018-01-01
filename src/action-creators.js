import { GLOBAL_CLICK, RESIZE } from "./actions";

export const globalClick = (event) => {
  return {
    type: GLOBAL_CLICK,
    payload: {
      x: event.clientX,
      y: event.clientY
    }
  }
}

export const resized = (width, height) => {
  type: RESIZE;
  payload: {
    width, height
  }
};
