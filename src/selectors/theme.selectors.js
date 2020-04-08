import { createSelector } from 'reselect'

export const themeSelector = state => state.theme

export const isLightModeSelector = createSelector(
    themeSelector,
    theme => theme.isLightMode
)