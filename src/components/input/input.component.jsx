import React, { useState, useRef } from 'react'

import * as S from './input.styles'


const Input = ({label, ...otherProps}) => {
    const [isFocus, setFocus] = useState(false)
    const input = useRef()
    const handleOnBlur = () => {
        if(!input.current.value.length) setFocus(false)
    }

    return (
        <S.Container>
            <S.Label isFocus={isFocus} >{label} </S.Label>
            <S.Input 
            {...otherProps} 
            ref={input} 
            onFocus={() => setFocus(true)} 
            onBlur={handleOnBlur} 
            />
        </S.Container>
    )
}

export default Input