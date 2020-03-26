import {
    darkMode,
    lightMode,
    THEME
} from './theme.data'

const INITIAL_STATE = THEME

const themeReducer = (state=INITIAL_STATE, action) => {
    if(action.type === 'CHANGE_MODE'){
        let newMode = state.isLightMode ? darkMode : lightMode
        return {
            ...state,
            isLightMode: !state.isLightMode,
            colors: { ...state.colors, ...newMode }
            }
        }
    return state;
}

export default themeReducer;

