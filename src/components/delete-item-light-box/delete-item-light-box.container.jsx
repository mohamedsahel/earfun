import React from 'react'
import  { useSelector } from 'react-redux'

import { itemToClearSelector } from "../../selectors/cart.selectors";

import DeleteItemLighBox from './delete-item-light-box.component'

const DeleteItemLightBoxContainer = () => {
    const itemToClear = useSelector(itemToClearSelector)
    if(itemToClear !== null) {
        return <DeleteItemLighBox item={itemToClear} />
    } else return null
}

export default DeleteItemLightBoxContainer