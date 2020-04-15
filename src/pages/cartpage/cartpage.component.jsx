import React from 'react'
import { useSelector } from 'react-redux'

import { cartItemsCountSelector } from "../../selectors/cart.selectors"
import * as S from './cartpage.styles'


const CartPage = () => {
    const cartItemNum = useSelector(cartItemsCountSelector)
    return (
        <S.Container>
            {
                cartItemNum === 0 ? <S.Empty>Your cart is empty</S.Empty>
                : <React.Fragment>
                    <S._CartItemsWrapper />
                    <S._OrderCard />
                </React.Fragment>
            }
        </S.Container>
    )
}

export default CartPage;