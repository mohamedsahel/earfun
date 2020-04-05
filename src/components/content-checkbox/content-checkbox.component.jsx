import React from 'react'

import * as S from './content-checkbox.styles'

const ContentCheckbox = ({ children, ...otherProps }) => {
    return <S.ContentCheckbox 
    {...otherProps} >
        { children }
    </S.ContentCheckbox>
}

export default ContentCheckbox