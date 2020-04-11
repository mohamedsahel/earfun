import Types from './snackbar.types'

export const toggleSnackbar = message => ({
    type: Types.TOGGLE_SNACKBAR,
    payload: message
})