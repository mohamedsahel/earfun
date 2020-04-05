import React, {useState} from 'react'

import * as S from './basic-checkbox.styles'

const BasicCheckbox = () => {
    const [checked, setChecked] = useState(false)
    return (
        <S.CheckBox onClick={() => setChecked(!checked)} checked={checked} />
    )
}

export default BasicCheckbox