import React from 'react'
import  { useSelector } from 'react-redux'

import { itemToClearSelector } from "../../selectors/cart.selectors";

import DeleteItemModal from './delete-item-modal.component'

const DeleteItemModalContainer = () => {
    const itemToClear = useSelector(itemToClearSelector)
    if(itemToClear !== null) {
        return <DeleteItemModal item={itemToClear} />
    } else return null
}

export default DeleteItemModalContainer