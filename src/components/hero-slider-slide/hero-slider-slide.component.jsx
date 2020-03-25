import React from 'react'

import * as S from './hero-slider-slide.styles'

const HeroSliderSlide = ({ item:{title, price, imageUrl} }) => {
    return (
        <S.Container>
            <S.Title>title</S.Title>
            <S.Price>price</S.Price>
            <S.Image> image </S.Image>
        </S.Container>
    )
}

export default HeroSliderSlide