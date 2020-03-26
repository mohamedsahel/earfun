import React from 'react'
import * as S from './button.styles'

const Button = ({ value, children, style, inverted, onClick }) => {
    return (
        <S.Container 
            style={style} 
            inverted = {inverted || false}
            onClick={onClick}
        >
            {children ? children : value}
        </S.Container>
    )
}

export default Button