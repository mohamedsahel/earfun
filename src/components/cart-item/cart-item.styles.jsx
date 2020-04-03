import styled from 'styled-components'

import { AspectRatioBox, ItemCount } from '..'


export const Container = styled.div`
    width: 100%;
    display: grid;
    justify-content: space-between;
    grid-template-columns: 25% 70%;
    grid-template-areas: 
    'img details'
    'img actions'
    'break break';
    font-size: 1rem;

    @media (min-width: 500px) {
        font-size: 1.2rem;
    }

`

export const ItemImage = styled(AspectRatioBox)`
    grid-area: img;
    border-radius: ${p => p.theme.radius.sm};
    background: ${p => p.theme.productBackground[p.color]};
    position: relative;
    align-self: flex-start;

    img {
        width: 100%;
        position: absolute;
        top: -2rem;
        left: 50%;
        transform: translateX(-50%);
    }

`

export const ItemDetails = styled.div`
    grid-area: details;
    margin-bottom: auto;

`

export const Title = styled.h3`
    font-size: 1.6em;
    font-weight: 500;
    color: ${p => p.theme.colors.gray_6};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const Price = styled.div`
    font-size: 1.8em;
    font-weight: 500;
    margin-top: 1rem;
`

export const OldPrice = styled.span`
    font-size: 0.9em;
    font-weight: 500;
    color: ${p => p.theme.colors.red};
    text-decoration: line-through;
    margin-left: 1.6rem;
`

export const Actions = styled.div`
    grid-area: actions;
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
`

export const _ItemCount = styled(ItemCount)`
`

export const Clear = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.1rem;
    font-size: 3rem;
    border-radius: ${p => p.theme.radius.fifty};
    cursor: pointer;

    &:hover {
        background: ${p => p.theme.colors.transparent_05}
    }

    &:active {
        background: ${p => p.theme.colors.transparent_10}
    }
`