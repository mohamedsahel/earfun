import Types from './coupon.types'

const INITIAL_STATE = null

const VALIDE_COUPONS = {
    new2020: 50,
    a2a3for: 20,
    thank40: 40
}


const couponReducer = (state=INITIAL_STATE, action) => {
    const {type, payload} = action
    switch(type) {
        case Types.APPLY_COUPON :
            return {
                code: payload, 
                discount: null || VALIDE_COUPONS[payload] 
            }

        default :
            return state
    }
}

export default couponReducer