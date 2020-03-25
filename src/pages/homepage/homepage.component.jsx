import React from 'react'

import { HeroSliderSlide, Icon } from "../../components";

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
            <Icon icon='Menu' />
        </S.Container>
    )
}

export default HomePage