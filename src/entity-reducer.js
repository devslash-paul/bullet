import {combineReducers} from 'redux';
import {GLOBAL_CLICK, GLOBAL_CLICK_UP} from './actions.js'
const createReducer = (initialState, handlers) => {
    return (state = initialState, action) => {
        if(handlers[action.type]) {
            return handlers[action.type](state, action);
        }
        return state;
    }
}

const lines = createReducer(
    {
        lastClick: {
            x: 0,
            y: 0
        }
    },
    {
        [GLOBAL_CLICK]: (state, action) => {
            return {
                ...state,
                lastClick: action.payload,
                mouseDown: true,
            }
        },
        [GLOBAL_CLICK_UP]: (state, action) => {
            return {
                ...state,
                mouseDown: false
            }
        }
    }
)

export default combineReducers({
    lines: lines
})