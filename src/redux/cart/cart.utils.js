
export const addItemToCart = (cartItems, itemToAdd) => {
    itemToAdd.count = 1
    cartItems.push(itemToAdd)
    return cartItems
}


export const changeCartItemCount = (cartItems, itemId, amount) => {
    const newCartItems = cartItems.map(item => {
        if(item.id === itemId) {
            item.count += amount
        }
        return item
    }
    )

    return newCartItems
}

export const clearItemFromCart = (cartItems, itemToClearId) =>  cartItems.filter(item => item.id !== itemToClearId)
