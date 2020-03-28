import React from 'react'
import PropTypes from 'prop-types'

import * as S from './button.styles'

const Button = ({ value, children, style, inverted, onClick, className }) => {
    return (
        <S.Button 
            style={style} 
            inverted = {inverted || false}
            onClick={onClick}
            className={className}
        >
            {children ? children : value}
        </S.Button>
    )
}

Button.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    style: PropTypes.object,
    inverted: PropTypes.bool,
    onClick: PropTypes.func
}

export default Button