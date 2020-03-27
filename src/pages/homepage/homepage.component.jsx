import React from 'react'

import { HeroSliderContainer as HeroSlider, Theme } from "../../components";

import * as S from './homepage.styles'

const theme = {colors: { light: '#F8F8F8' }}

const HomePage = () => {
    return (
        <Theme>
            <S.Container>
                <HeroSlider />
            </S.Container>
        </Theme>
    )
}

export default HomePage