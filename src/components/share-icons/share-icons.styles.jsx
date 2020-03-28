import styled from 'styled-components'
import React from 'react'

import { Icon } from '..'

export const StyledIcon = styled(Icon)`
    &:hover {
        background: ${p => p.theme.colors.transparent_10}
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    max-width: 24rem;
    height: 100%;
    margin: auto;
`