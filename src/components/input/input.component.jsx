import React, { useState, useRef } from 'react'

import * as S from './input.styles'


const Input = ({label, ...otherProps}) => {
    const [value, setValue] = useState('')
    const [isFocus, setFocus] = useState(false)
    const input = useRef()

    const handleOnBlur = () => {
        if(!value.length) setFocus(false)
    }

    const handleChange = e => {
        e.preventDefault()
        setValue(e.target.value)
    }

    return (
        <S.Container>
            <S.Label isFocus={isFocus} >{label} </S.Label>
            <S.Input 
            {...otherProps} 
            value={value}
            ref={input} 
            onChange={handleChange}
            onFocus={() => setFocus(true)} 
            onBlur={handleOnBlur} 
            />
        </S.Container>
    )
}

export default Input