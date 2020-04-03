
export const addItemToCart = (cartItems, itemToAdd) => {
    const item = { ...itemToAdd }
    item.count = 1
    cartItems.push(item)
    return [...cartItems]
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

export const clearItemFromCart = (cartItems, itemToClearId) => cartItems.filter(item => item.id !== itemToClearId)