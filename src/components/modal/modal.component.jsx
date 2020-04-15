import React from 'react'

import * as S from './modal.styles'

const Modal = ({ children }) => {
    return (
        <S.Background>
            <S.Container>
                {children}
            </S.Container>
        </S.Background>
    )
}

export default Modal