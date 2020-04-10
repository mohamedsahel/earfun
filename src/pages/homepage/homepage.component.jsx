import React from 'react'

import { HeroSlider, Theme } from "../../components"

import * as S from './homepage.styles'


const HomePage = () => {
    return (
        <Theme >
            <S.Container>
                <HeroSlider />
            </S.Container>
        </Theme>
    )
}

export default HomePage