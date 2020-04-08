import { createSelecor } from 'reselect'

export const themeSelector = state => state.theme

export const isLightModeSelector = createSelecor(
    themeSelector,
    theme => theme.isLightMode
)