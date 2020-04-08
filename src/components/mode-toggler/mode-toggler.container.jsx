import React from 'react'
import { useSelector } from 'react-redux'

import { isLightModeSelector } from '../../selectors/theme.selectors'

import ModeToggler from './mode-toggler.component'

const ModeTogglerContainer = () => {
    const isLight = useSelector(isLightModeSelector)
    return <ModeToggler mode={isLight ? 'light' : 'dark' } />
}

export default ModeTogglerContainer