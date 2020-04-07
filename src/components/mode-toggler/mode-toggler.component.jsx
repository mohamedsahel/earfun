import React, { useState } from 'react'
import { useDispatch } from "react-redux"

import { changeMode } from "../../redux/theme/theme.actions"

import * as S from './mode-toggler.styles'

const ModeToggler = ({ mode='light' }) => {
    const [isOpen, setIsOpen] = useState(true)
    const dispatch = useDispatch()
    return (
        <S.Container isOpen={isOpen} >
            <S._Icon 
            icon='backArrow'
             size='2rem' 
             svgSize='100%' 
             onClick={() => setIsOpen(!isOpen)}
             />
                {
                    mode === 'light' ? 
                    <S._SunIcon 
                        onClick={() => dispatch(changeMode())}
                    /> : <S._MoonIcon 
                        onClick={() => dispatch(changeMode())}
                    />
                }
        </S.Container>
    )
}

export default ModeToggler