
import Types from './snackbar.types'

const INITIAL_STATE = {
    isShown: false,
    message: ''
}


const snackbarReducer = (state=INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case Types.TOGGLE_SNACKBAR:
            return {
                isShown: !state.isShown,
                message: payload
            }

        default:
            return state
    }
}

export default snackbarReducer