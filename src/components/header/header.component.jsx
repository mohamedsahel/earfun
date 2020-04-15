import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom"
import { Link } from 'react-router-dom'

import { CartIcon, ShopIcon } from '..'

import * as S from './header.styles'

const Header = () => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo({top: 0})
    }, [location])

    return (
        <S.Container >
            <S.ItemsWrapper>
                <Link to='/' >
                    <S.HeaderLogo />
                </Link>
                <ShopIcon />
                <Link to='/cart' >
                    <CartIcon />
                </Link>
            </S.ItemsWrapper>
        </S.Container>
    )
}

export default Header