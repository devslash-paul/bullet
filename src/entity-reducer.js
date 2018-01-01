import {combineReducers} from 'redux';
import {GLOBAL_CLICK} from './actions.js'
const createReducer = (initialState, handlers) => {
    return (state = initialState, action) => {
        if(handlers[action.type]) {
            return handlers[action.type](state, action);
        }
        return state;
    }
}

const lines = createReducer(
    {},
    {
        [GLOBAL_CLICK]: (state, action) => {
            return {
                ...state,
                lastClick: action.payload,
            }
        }
    }
)

export default combineReducers({
    lines: lines
})