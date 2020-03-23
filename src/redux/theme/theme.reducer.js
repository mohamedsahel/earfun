
const darkMode = {
    light: '#09142A',
    dark: '#F8F8F8',
    white: '#000',
    black: '#fff',
    gray_1: '#404040',
    gray_2: '#787878',
    gray_3: '#C7C7C7',
    gray_4: '#E4E4E4',
    gray_5: '#F1F1F1',
    gray_6: '#F8F8F8',
}

const lightMode = {
    light: '#F8F8F8',
    dark: '#09142A',
    white: '#fff',
    black: '#000',
    gray_1: '#F8F8F8',
    gray_2: '#F1F1F1',
    gray_3: '#E4E4E4',
    gray_4: '#C7C7C7',
    gray_5: '#787878',
    gray_6: '#404040',
}

const THEME = {
    isLightMode: true,
    colors: {
        green: '#0099FF',
        red: '#FF5A7C',
        blue: '#0099FF',
        ...lightMode
    },
}


const themeReducer = (state=THEME, action) => {
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

