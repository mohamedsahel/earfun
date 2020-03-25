import {
    darkMode,
    lightMode,
    THEME
} from './theme.data'

const INITIAL_STATE = THEME

const themeReducer = (state=INITIAL_STATE, action) => {
    if(action.type === 'CHANGE_MODE'){
        let newMode = state.mode ? darkMode : lightMode
        return {
            ...state,
            mode: !state.mode,
            colors: { ...state.colors, ...newMode }
            }
        }
    return state;
}

export default themeReducer;

