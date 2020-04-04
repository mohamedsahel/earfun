import { getDiscountedValue } from '../../utils'

export const getItemsTotal = items => items.reduce((acc, item) => acc + getDiscountedValue(item.price * item.count,  item.discount)
, 0)
