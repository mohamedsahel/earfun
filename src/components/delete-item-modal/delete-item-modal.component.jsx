import React from 'react'
import { useDispatch } from 'react-redux'

import { clearItemAsync, cancelClearItem } from "../../redux/cart/cart.actions";

import { Modal } from ".."

import * as S from './delete-item-modal.styles'

const DeleteItemModal = ({ item }) => {
    const dispatch = useDispatch()
    return (
        <Modal>
            <S.Container>
                <S.Quation>
                    Do you really want to clear <img src={item.imageUrl} alt={item.title} /> from cart ? 
                </S.Quation>
                <S.Actions>
                    <S.Cancel onClick={(() => dispatch(cancelClearItem()))} >Cancel</S.Cancel>
                    <S.ConfirmButton value='Clear' onClick={() => dispatch(clearItemAsync(item.id))} />
                </S.Actions>
            </S.Container>
        </Modal>
    )
}

export default DeleteItemModal