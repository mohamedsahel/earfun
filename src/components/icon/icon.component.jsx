import React from 'react'
import PropTypes from 'prop-types'

import ICONS from './icons'

import * as S from './icon.styles'

const Icon = ({ icon, onClick, size='2.4rem', svgSize='60%', className }) => {
    const CapitalizeIcon = icon.charAt(0).toUpperCase() + icon.slice(1);
    const Icon = ICONS[CapitalizeIcon]
    return (
        <S.Container size={size} svgSize={svgSize} className={className} onClick={onClick} >
            <Icon />
        </S.Container>
    )
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.string,
    svgSize: PropTypes.string,
    onClick: PropTypes.func
}

export default Icon