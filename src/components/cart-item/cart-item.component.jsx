import React from 'react'
import { useDispatch } from 'react-redux'

import { clearItem } from "../../redux/cart/cart.actions";

import * as S from './cart-item.styles'

const CartItem = ({ className, item }) => {
    const dispatch = useDispatch();
    return (
        <S.Container className={className} >
            <S.ItemImage color={item.color} >
                <img src={item.imageUrl} alt={item.title} />
            </S.ItemImage>
            <S.ItemDetails>
                <S.Title> {item.title} </S.Title>
                <S.Price> $ {item.price} </S.Price>
            </S.ItemDetails>
            <S.Actions>
                <S._ItemCount itemId={item.id} />
                <S.Clear
                onClick={() => dispatch(clearItem(item.id))}
                >&#215;</S.Clear>
            </S.Actions>
        </S.Container>
    )
}

export default CartItem