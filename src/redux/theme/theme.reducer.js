import {
    darkMode,
    lightMode,
    shadowDark,
    shadowLight,
    THEME
} from './theme.data'

const INITIAL_STATE = THEME

const themeReducer = (state=INITIAL_STATE, action) => {
    console.log(state)
    if(action.type === 'CHANGE_MODE'){
        let newMode = state.isLightMode ? darkMode : lightMode
        return {
            ...state,
            isLightMode: !state.isLightMode,
            colors: { ...state.colors, ...newMode },
            shadow: state.isLightMode ? shadowDark : shadowLight
            }
        }
    return state;
}

export default themeReducer;

