import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { changeMode } from '../../redux/theme/theme.actions'

import { MenuIcon, Icon } from ".."

import * as S from './menu-dropdown.styles'


const MenuDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch()
    return (
        <S.Container 
        isOpen={isOpen} >
            <MenuIcon 
            size='3.6rem' 
            svgSize='45%' 
            onClick={() => setIsOpen(!isOpen)} />
            {
                isOpen && <React.Fragment>
                    <Icon 
                    icon='heart' 
                    size='3.6rem' 
                    svgSize='45%' 
                    onClick={() => dispatch(changeMode())} />
                    <Icon 
                    icon='login' 
                    size='3.6rem' 
                    svgSize='45%'/>
                </React.Fragment>
            }
        </S.Container>
    )
}

export default MenuDropdown;