import React from 'react'
import PropTypes from 'prop-types'

import ICONS from './icons'

import * as S from './icon.styles'

const Icon = ({ icon, size='2.4rem', svgSize='60%', className }) => {
    const CapitalizeIcon = icon.charAt(0).toUpperCase() + icon.slice(1);
    const Icon = ICONS[CapitalizeIcon]
    return (
        <S.Container size={size} svgSize={svgSize} className={className} >
            <Icon />
        </S.Container>
    )
}

Icon.propTypes = {
    icon: PropTypes.string,
    size: PropTypes.string,
    svgSize: PropTypes.string,
}

export default Icon