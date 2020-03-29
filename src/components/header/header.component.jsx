import React from 'react'

import { Icon } from "..";

import * as S from './header.styles'

const Header = () => {
    return (
        <S.Container >
            <S.HeaderLogo />
            <S.HeaderIcon icon='shop' size='3.8rem' svgSize='45%' />
            <S.HeaderIcon icon='bag'  size='3.8rem' svgSize='45%' />
            <S.HeaderIcon icon='menu'  size='3.8rem' svgSize='45%' />
        </S.Container>
    )
}

export default Header