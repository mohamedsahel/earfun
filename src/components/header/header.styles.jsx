import styled from 'styled-components'


import { Icon } from '..'

import { ReactComponent as EarfunLogo } from '../../assests/images/earfun-logo.svg'


export const HeaderLogo = styled(EarfunLogo)`
    height: 2.5rem;
`

export const HeaderIcon = styled(Icon)`
    border-radius: ${p => p.theme.radius.sm};
`

export const ItemsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    max-width: 120rem;
    margin: auto;
    padding-right: 1.8rem;
    padding-left: 1.8rem;

    svg path {
        fill: ${p => p.theme.colors.black};
    }

`

export const Container = styled.div`
    position: fixed;
    top: 0;
    height: 5rem;
    width: 100%;
    background: ${p => p.theme.colors.light};
    box-shadow: ${p => p.theme.shadow.sm};
    z-index: 10;
`