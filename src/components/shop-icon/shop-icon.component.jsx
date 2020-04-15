import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { startFiltering } from '../../redux/filter/filter.actions'

import * as S from './shop-icon.styles'

const ShopIcon = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    return (
        location.pathname === '/shop' ?
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
    )
}

export default ShopIcon