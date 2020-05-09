
import Types from './snackbar.types'

const INITIAL_STATE = {
    isShown: false,
    message: ''
}


const snackbarReducer = (state=INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case Types.SHOW_SNACKBAR:
            return {
                isShown: true,
                message: payload
            }

        case Types.HIDE_SNACKBAR:
            return {
                ...state,
                isShown: false
            }

        default:
            return state
    }
}

export default snackbarReducer