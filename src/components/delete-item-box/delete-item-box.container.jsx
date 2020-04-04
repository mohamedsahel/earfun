import React from 'react'
import  { useSelector } from 'react-redux'

import { itemToClearSelector } from "../../selectors/cart.selectors";

import DeleteItemBox from './delete-item-box.component'

const DeleteItemLightBoxContainer = () => {
    const itemToClear = useSelector(itemToClearSelector)
    if(itemToClear !== null) {
        return <DeleteItemBox item={itemToClear} />
    } else return null
}

export default DeleteItemLightBoxContainer