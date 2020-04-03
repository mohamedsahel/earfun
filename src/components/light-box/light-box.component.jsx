import React from 'react'

import * as S from './light-box.styles'

const LightBox = ({ children }) => {
    return (
        <S.Background>
            <S.Container>
        {children}
            </S.Container>
        </S.Background>
    )
}

export default LightBox