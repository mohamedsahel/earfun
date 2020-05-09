import Types from './snackbar.types'

export const showSnackbar = message => ({
    type: Types.SHOW_SNACKBAR,
    payload: message
})

export const hideSnackbar = () => ({
    type: Types.HIDE_SNACKBAR
})