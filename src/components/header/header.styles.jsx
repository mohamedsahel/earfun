import styled from 'styled-components'

import { Icon } from '..'

import { ReactComponent as EarfunLogo } from '../../assests/images/earfun-logo.svg'


export const HeaderLogo = styled(EarfunLogo)`
    height: 2.5rem;

    @media (min-width: 800px) {
        margin-right: auto;
        margin-left: 0;
    }
`

export const HeaderIcon = styled(Icon)`
    margin-left: 4rem;
    border-radius: ${p => p.theme.radius.sm};
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    height: 5rem;
    width: 100%;
    padding-right: 1.6rem;
    padding-left: 1.6rem;
    background: ${p => p.theme.colors.light2};
    box-shadow: 0 0 0.8rem ${p => p.theme.colors.transparent_05},
                0 0 1.6rem ${p => p.theme.colors.transparent_05};


    svg path {
        fill: ${p => p.theme.colors.black};
    }

    @media (min-width: 800px) {
        justify-content: none;
    }

`