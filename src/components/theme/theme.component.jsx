import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'


const Theme = ({ children, theme }) => {
    const THEME = useSelector(state => state.theme)
    return (
        <ThemeProvider theme={theme ? theme : THEME} mode='light'>{children}</ThemeProvider>
    )
}

export default Theme