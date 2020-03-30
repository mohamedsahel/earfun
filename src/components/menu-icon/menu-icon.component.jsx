import React, { useState } from 'react'
import PropTypes from 'prop-types'

import * as S from './menu-icon.styles'

const MenuIcon = props => {
    return (
        <S.MenuIcon icon='Menu' {...props} />
    )
}

export default MenuIcon