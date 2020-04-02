import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { changeItemCount } from "../../redux/cart/cart.actions";

import * as S from './item-count.styles'

const ItemCount = ({ itemId }) => {
    const dispatch = useDispatch()
    const itemCount = useSelector(state => state.cart.items.find(item => item.id === itemId)).count
    return (
        <S.Container>
            <S.CountButton 
                onClick={() => dispatch(changeItemCount(itemId, -1))}
                left>&#8722;</S.CountButton>
            <S.CountInput 
                value={itemCount} 
                readOnly/>
            <S.CountButton 
                onClick={() => dispatch(changeItemCount(itemId, 1))}
                right>&#43;</S.CountButton>
        </S.Container>
    )
}

export default ItemCount