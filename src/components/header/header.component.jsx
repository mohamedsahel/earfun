import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from "react-router-dom"

import { startFiltering } from '../../redux/filter/filter.actions'

import { CartIcon } from '..'

import * as S from './header.styles'

const Header = () => {
    const dispatch = useDispatch()
    const pathName = useLocation().pathname
    return (
        <S.Container >
            <S.ItemsWrapper>
                <S.HeaderLogoLink to='/' >
                    <S.HeaderLogo />
                </S.HeaderLogoLink>
                {
                    pathName === '/shop' ?
                    <S.HeaderIcon 
                    icon='Filter' 
                    size='3.8rem' 
                    svgSize='49%' 
                    onClick={() => dispatch(startFiltering())}
                    /> :
                    <S.HeaderIconLink to='/shop' >
                        <S.HeaderIcon icon='shop' size='3.8rem' svgSize='45%' />
                    </S.HeaderIconLink>
                }
                <S.HeaderIconLink to='/cart' >
                    <CartIcon />
                </S.HeaderIconLink>
            </S.ItemsWrapper>
        </S.Container>
    )
}

export default Header