import React from 'react'

import { ReactComponent as EarfunLogo } from '../../assests/images/earfun-logo.svg'

import * as S from './header.styles'

const Header = ({ noShadow }) => {
    return (
        <S.Container noShadow={noShadow}>
            <EarfunLogo />
        </S.Container>
    )
}

export default Header