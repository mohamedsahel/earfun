import React from 'react' 

import * as S from './color-checkbox.styles'

const ColorCheckbox = ({color, ...otherProps}) => {
    const colors = {
        red: '#FF5A7C',
        blue: '#0099FF',
        green: '#58e88b',
        pink: '#ffc0cb',
        black: '#404040',
        white: 'white',
        gray: '#C7C7C7',
        gold: '#ffd025'
    }
    return <S.ColorCheckbox color={colors[color]}
    {...otherProps} />
}

export default ColorCheckbox