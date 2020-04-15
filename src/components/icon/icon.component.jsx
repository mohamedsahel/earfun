import React from 'react'
import PropTypes from 'prop-types'

import ICONS from './icons'

import * as S from './icon.styles'

const Icon = ({ icon, size='2.4rem', svgSize='60%' , hover=true, ...otherProps }) => {
    const CapitalizeIcon = icon.charAt(0).toUpperCase() + icon.slice(1);
    const Icon = ICONS[CapitalizeIcon]
    return (
        <S.Container size={size} svgSize={svgSize} hover={hover} {...otherProps} >
            <Icon />
        </S.Container>
    )
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.string,
    svgSize: PropTypes.string,
    hover: PropTypes.bool,
    onClick: PropTypes.func
}

export default React.memo(Icon)