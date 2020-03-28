import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { HeroSliderContainer as HeroSlider, Theme } from "../../components";

import * as S from './homepage.styles'


const HomePage = () => {
    const theme = useContext(ThemeContext); 
    const changedTheme = {
        colors: { 
            ...theme.colors, 
            light: theme.isLightMode ? theme.colors.gray_1 : theme.colors.light
        }
    }
    console.log('rerendred')

    return (
        <Theme  theme={changedTheme} >
            <S.Container>
                <HeroSlider />
            </S.Container>
        </Theme>
    )
}

export default HomePage