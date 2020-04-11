import React from 'react'
import { useDispatch } from 'react-redux'

import { clearItemAsync, cancelClearItem } from "../../redux/cart/cart.actions";

import { LightBox } from ".."

import * as S from './delete-item-box.styles'

const DeleteItemLightBox = ({ item }) => {
    const dispatch = useDispatch()
    return (
        <LightBox>
            <S.Container>
                <S.Quation>
                    Do you really want to clear <img src={item.imageUrl} alt={item.title} /> from cart ? 
                </S.Quation>
                <S.Actions>
                    <S.Cancel onClick={(() => dispatch(cancelClearItem()))} >Cancel</S.Cancel>
                    <S.ConfirmButton value='Clear' onClick={() => dispatch(clearItemAsync(item.id))} />
                </S.Actions>
            </S.Container>
        </LightBox>
    )
}

export default DeleteItemLightBox