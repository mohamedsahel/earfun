import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import { themeSelector } from '../../selectors/theme.selectors'

const Theme = ({ children, theme }) => {
    const THEME = useSelector(themeSelector)
    return (
        <ThemeProvider theme={theme ? theme : THEME} mode='light'>{children}</ThemeProvider>
    )
}

Theme.propTypes = {
    theme: PropTypes.object
}

export default Theme