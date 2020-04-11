import React from 'react'

import * as S from './snackbar.styles'

const Snackbar = ({ message, ...restProps }) => {
    return (
        <S.Container {...restProps} >
            {message}
        </S.Container>
    )
}

export default Snackbar