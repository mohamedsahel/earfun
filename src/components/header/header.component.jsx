import React from 'react'

import { Icon, MenuDropdown } from "..";

import * as S from './header.styles'

const Header = () => {
    return (
        <S.Container >
            <S.ItemsWrapper>
                <S.HeaderLogoLink to='/' >
                    <S.HeaderLogo />
                </S.HeaderLogoLink>
                <S.HeaderIconLink to='/shop' >
                    <S.HeaderIcon icon='shop' size='3.8rem' svgSize='45%' />
                </S.HeaderIconLink>
                <S.HeaderIconLink to='/cart' >
                    <S.HeaderIcon icon='bag'  size='3.8rem' svgSize='45%' />
                </S.HeaderIconLink>
                <MenuDropdown />
            </S.ItemsWrapper>
        </S.Container>
    )
}

export default Header