import styled from 'styled-components'

import { Icon } from '..'

const Colors = {
    black: 'rgba(128, 128, 128, 0.05)',
    white: 'rgba(128, 128, 128, 0.05)',
    blue: 'rgba(0, 0, 255, 0.05)',
    red: 'rgba(255, 0, 0, 0.05)',
    pink: 'rgba(255, 0, 128, 0.05)',
    green: 'rgba(0, 255, 0, 0.05)'
}

export const Container = styled.div`
    height: 38rem;
    width: 28rem;
    text-align: center;
    padding: 1.6rem;
    border-radius: ${p => p.theme.radius.sm};
    background: ${p => Colors[p.color]};
    position: relative;

    :hover {
        box-shadow: ${p => p.theme.shadow.sm};
    }
`

export const Image = styled.img`
    height: 28rem;
    width: auto;
    margin-top: -6rem;
`

export const Title = styled.h3`
    font-size: 1.8rem;
    font-weight: 400;
    margin-top: 6rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const Price = styled.span`
    display: block;
    font-size: 2.2rem;
    font-weight: 500;
    margin-top: 1.4rem;
    text-align: left;
`

export const PlusIcon = styled(Icon)`
    position: absolute;
    top: 22rem;
    right: 2rem;
    background: ${p => p.theme.colors.light2};
    box-shadow: ${p => p.theme.shadow.sm};

    :hover {
        background: ${p => p.theme.colors.light2};
        box-shadow: ${p => p.theme.shadow.md};
    }

    :active {
        background: ${p => p.theme.colors.transparent_05};

    }
` 