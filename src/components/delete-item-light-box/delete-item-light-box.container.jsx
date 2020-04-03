import React from 'react'
import  { useSelector } from 'react-redux'

import DeleteItemLighBox from './delete-item-light-box.component'

const DeleteItemLightBoxContainer = () => {
    const itemToClear = useSelector(state => state.cart.itemToClear)
    if(itemToClear !== null) {
        return <DeleteItemLighBox item={itemToClear} />
    } else return null
}

export default DeleteItemLightBoxContainer