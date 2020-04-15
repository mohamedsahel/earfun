import styled from 'styled-components'

import { Icon } from ".."

export const Container = styled.div`
    position: relative;
`

export const _Icon = styled(Icon)`
    border-radius: ${p => p.theme.radius.sm};
`

export const Count = styled.div`
    padding: 0.15rem 0.55rem 0.15rem 0.55rem;
    font-size: 1rem;
    font-weight: 500;
    background: ${p => p.theme.colors.red};
    border: 0.2rem solid ${p => p.theme.colors.light};
    border-radius: ${p => p.theme.radius.lg};
    position: absolute;
    top: 0.3rem;
    left: 1.85rem;
    color: white;
`