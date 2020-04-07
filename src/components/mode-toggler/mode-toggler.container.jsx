import React from 'react'
import { useSelector } from 'react-redux'

import ModeToggler from './mode-toggler.component'

const ModeTogglerContainer = () => {
    const isLight = useSelector(state => state.theme.isLightMode)
    return <ModeToggler mode={isLight ? 'light' : 'dark' } />
}

export default ModeTogglerContainer