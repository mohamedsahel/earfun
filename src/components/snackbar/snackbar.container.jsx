import React from 'react'
import { useSelector } from 'react-redux'

import Snackbar from './snackbar.component'

const SnackbarContainer = () => {
    const {isShown, message} = useSelector(state => state.snackbar)

    return <Snackbar message={message} isShown={isShown} />
}

export default SnackbarContainer