import React from 'react'

import HeroSliderSlide from "../../components/hero-slider-slide/hero-slider-slide.component";

import * as S from './homepage.styles'

const item = {
    id: 16,
    title: "JBL Microphone earphones",
    price: 30,
    discount: 0,
    imageUrl: "https://i.imgur.com/ZtT6QDx.png",
    color: "red",
    brand:"jbl",
    type: "earphones",
    connectWith: 'bluetooth'
}

const HomePage = () => {
    return (
        <S.Container>
            <HeroSliderSlide item={item} />
        </S.Container>
    )
}

export default HomePage