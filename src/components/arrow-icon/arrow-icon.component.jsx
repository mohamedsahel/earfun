import React from 'react'
import PropTypes from 'prop-types'


import * as S from './arrow-icon.styles'

const ArrowIcon = ({ sens='right', onClick, noBody=false, size='3.6rem', svgSize='50%' }) => {
    return (
        <S.Arrow icon={noBody ? 'BackArrow' : 'Arrow'} sens={sens} onClick={onClick} size={size} svgSize={svgSize} />
    )
}

ArrowIcon.propTypes= {
    sens: PropTypes.oneOf(['right', 'left']),
    onClick: PropTypes.func,
    noBody: PropTypes.bool,
    size: PropTypes.string,
    svgSize: PropTypes.string
}

export default ArrowIcon