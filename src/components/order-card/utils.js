import { getDiscountedValue } from '../../utils'

export const getItemsTotal = items => items.reduce((total, item) => total + getDiscountedValue(item.price * item.count,  item.discount)
, 0)
