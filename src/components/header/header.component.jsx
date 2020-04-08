import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from "react-router-dom"
import { Link } from 'react-router-dom'


import { usePrevious } from '../../hooks'
import { startFiltering } from '../../redux/filter/filter.actions'

import { CartIcon } from '..'

import * as S from './header.styles'

const Header = () => {
    const dispatch = useDispatch()
    const pathName = useLocation().pathname
    const previousPath = usePrevious(pathName)

    useEffect(() => {
        if(pathName !== previousPath) {
            window.scrollTo({top: 0})
        }
    })

    return (
        <S.Container >
            <S.ItemsWrapper>
                <Link to='/' >
                    <S.HeaderLogo />
                </Link>
                {
                    pathName === '/shop' ?
                    <S.HeaderIcon 
                    icon='Filter' 
                    size='3.8rem' 
                    svgSize='49%' 
                    onClick={() => dispatch(startFiltering())}
                    /> 
                    :
                    <Link to='/shop' >
                        <S.HeaderIcon 
                        icon='shop' 
                        size='3.8rem' 
                        svgSize='45%' />
                    </Link>
                }
                <Link to='/cart' >
                    <CartIcon />
                </Link>
            </S.ItemsWrapper>
        </S.Container>
    )
}

export default Header