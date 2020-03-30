import React from 'react'

import { Icon, MenuDropdown } from "..";

import * as S from './header.styles'

const Header = () => {
    return (
        <S.Container >
            <S.ItemsWrapper>
                <S.HeaderLogo />
                <S.HeaderIcon icon='shop' size='3.8rem' svgSize='45%' />
                <S.HeaderIcon icon='bag'  size='3.8rem' svgSize='45%' />
                <MenuDropdown />
            </S.ItemsWrapper>
        </S.Container>
    )
}

export default Header