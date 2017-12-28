import { GLOBAL_CLICK, RESIZE } from "./actions";

export const globalClick = () => {
  type: GLOBAL_CLICK;
};

export const resized = (width, height) => {
  type: RESIZE;
  payload: {
    width, height
  }
};
