import React  from 'react'
import PropTypes from 'prop-types'

import * as S from './hero-slider-slide.styles'

const HeroSliderSlide = ({ item:{title, price, imageUrl}, showen }) => {
    return (
        <S.Container showen={showen} >
            <S.Image src={imageUrl} />
            <S.Title>{title}</S.Title>
            <S.Price>$ {price}</S.Price>
        </S.Container>
    )
}

HeroSliderSlide.propTypes = {
    item: PropTypes.object,
    showen: PropTypes.bool
}

export default HeroSliderSlide