import Types from './coupon.types'

export const applyCoupon = code => ({
    type: Types.APPLY_COUPON,
    payload: code
})