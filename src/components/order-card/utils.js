
export const getItemsTotal = items => items.reduce((total, item) => {
    const discount = item.discount > 0 ? item.discount : 100
    return total + item.price * item.count * discount / 100
}
, 0)
