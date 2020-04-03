import React from 'react'
import { useDispatch } from 'react-redux'

import { getDiscountedValue } from '../../utils'
import { startClearItem } from "../../redux/cart/cart.actions"


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
                {
                    !item.discount ? (<S.Price>$ {item.price}</S.Price>) 
                    : (<S.Price>
                          $ {getDiscountedValue(item.price, item.discount)}
                        <S.OldPrice>
                            $ {item.price}
                        </S.OldPrice>
                    </S.Price> )
                }
            </S.ItemDetails>
            <S.Actions>
                <S._ItemCount itemId={item.id} />
                <S.Clear
                onClick={() => dispatch(startClearItem(item))}
                >&#215;</S.Clear>
            </S.Actions>
        </S.Container>
    )
}

export default CartItem