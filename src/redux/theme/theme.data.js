export const darkMode = {
    light: '#09142A',
    light2: '#09142A',
    dark: '#fff',
    white: '#000',
    black: '#fff',
    gray_1: '#404040',
    gray_2: '#787878',
    gray_3: '#C7C7C7',
    gray_4: '#E4E4E4',
    gray_5: '#F1F1F1',
    gray_6: '#F8F8F8',
    transparent_05: 'rgba(255, 255, 255, 0.05)',
    transparent_10: 'rgba(255, 255, 255, 0.10)',
    transparent_15: 'rgba(255, 255, 255, 0.15)',
    transparent_20: 'rgba(255, 255, 255, 0.20)',
    transparent_30: 'rgba(255, 255, 255, 0.30)',
    transparent_40: 'rgba(255, 255, 255, 0.40)',
    transparent_50: 'rgba(255, 255, 255, 0.50)',
    transparent_65: 'rgba(255, 255, 255, 0.65)',
    transparent_75: 'rgba(255, 255, 255, 0.75)',
    transparent_90: 'rgba(255, 255, 255, 0.90)',
}

export const lightMode = {
    light: '#fff',
    light2: '#F8F8F8',
    dark: '#09142A',
    white: '#fff',
    black: '#000',
    gray_1: '#F8F8F8',
    gray_2: '#F1F1F1',
    gray_3: '#E4E4E4',
    gray_4: '#C7C7C7',
    gray_5: '#787878',
    gray_6: '#404040',
    transparent_05: 'rgba(0, 0, 0, 0.05)',
    transparent_10: 'rgba(0, 0, 0, 0.10)',
    transparent_15: 'rgba(0, 0, 0, 0.15)',
    transparent_20: 'rgba(0, 0, 0, 0.20)',
    transparent_30: 'rgba(0, 0, 0, 0.30)',
    transparent_40: 'rgba(0, 0, 0, 0.40)',
    transparent_50: 'rgba(0, 0, 0, 0.50)',
    transparent_65: 'rgba(0, 0, 0, 0.65)',
    transparent_75: 'rgba(0, 0, 0, 0.75)',
    transparent_90: 'rgba(0, 0, 0, 0.90)',
}


export const shadowLight = {
    sm: `0 0 0.8rem rgba(0, 0, 0, 0.05),
         0 0 1.6rem rgba(0, 0, 0, 0.05)`,
    md: `0 0 1.6rem rgba(0, 0, 0, 0.01),
         0 0 2.4rem rgba(0, 0, 0, 0.02),
         0 0 3.2rem rgba(0, 0, 0, 0.02)`
}

export const shadowDark = {
    sm: `0 0 0.8rem rgba(255, 255, 255, 0.05),
         0 0 1.6rem rgba(255, 255, 255, 0.05)`,
    md: `0 0 0.8rem rgba(255, 255, 255, 0.05),
        0 0 1.8rem rgba(255, 255, 255, 0.05),
        0 0 3rem rgba(255, 255, 255, 0.05)`
}

export const productBackgroundDark = {
    black: 'rgba(255, 255, 255, 0.05)',
    white: 'rgba(255, 255, 255, 0.05)',
    gray: 'rgba(255, 255, 255, 0.05)',
    blue: 'rgba(255, 255, 255, 0.05)',
    red: 'rgba(255, 255, 255, 0.05)',
    pink: 'rgba(255, 255, 255, 0.05)',
    green: 'rgba(255, 255, 255, 0.05)',
    gold: 'rgba(255, 255, 255, 0.05)'
}

export const productBackgroundLight = {
    black: 'rgba(128, 128, 128, 0.1)',
    white: 'rgba(128, 128, 128, 0.1)',
    gray: 'rgba(128, 128, 128, 0.1)',
    blue: 'rgba(0, 128, 255, 0.1)',
    red: 'rgba(255, 0, 0, 0.1)',
    pink: 'rgba(255, 0, 200, 0.08)',
    green: 'rgba(0, 255, 0, 0.1)',
    gold: 'rgba(236, 216, 153, 0.1)'
}

export const THEME = {
    isLightMode: true,
    colors: {
        green: 'rgb(50, 190, 100)',
        red: '#FF5A7C',
        blue: '#0099FF',
        ...lightMode
    },
    productBackground: {...productBackgroundLight},
    font: 'montserrat, open sans',
    radius: {
        xs: '0.2rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        hg: '10rem',
        fifty: '50%'
    },
    shadow: { ...shadowLight }

}