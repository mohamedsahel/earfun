import styled from 'styled-components'

import { Icon, DiscountLabel } from '..'


export const Image = styled.img`
    height: 28rem;
    margin-top: -6rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.5s ease-in-out;
    `


export const Container = styled.div`
    height: 38rem;
    width: 28rem;
    padding: 1.6rem;
    border-radius: ${p => p.theme.radius.sm};
    background: ${p => p.theme.productBackground[p.color]};
    position: relative;
    
    &:hover {
        ${Image} {
            transform: translate(-50%, -1rem);
        }
    }
`


export const DiscountLabelIcon = styled(DiscountLabel)`
    position: absolute;
    top: 23.4rem;
    left: -1.41rem;
`

export const PlusIcon = styled(Icon)`
    position: absolute;
    top: 22rem;
    right: 2rem;
    background: white;
    box-shadow: ${p => p.theme.shadow.sm};
    transition: background 0.4s;

    svg path {
        fill: black;
        stroke: black;
        stroke-width: 2rem;
    }

    :hover {
        background: white;
        box-shadow: ${p => p.theme.shadow.md};
    }

    :active {
        background: ${p => p.theme.colors.transparent_05};

    }
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
    display: inline-block;
    font-size: 2.2rem;
    font-weight: 500;
    margin-top: 1.4rem;
`

export const OldPrice = styled.span`
    display: inline-block;
    color: gray;
    font-size: 2rem;
    font-weight: 400;
    text-decoration: line-through;
    margin: 1.4rem;
`