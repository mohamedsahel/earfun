import styled from 'styled-components'

import { CartItemsWrapper, OrderCard } from '../../components'


export const Container = styled.div`
    padding-top: 5rem;

`

export const _CartItemsWrapper = styled(CartItemsWrapper)`
    margin: auto;
    margin-top: 5rem;
    @media (min-width: 1100px) {
        margin: 5rem 4%;
    }
`

export const _OrderCard = styled(OrderCard)`
    margin: 6rem auto;

    @media (min-width: 1100px) {
        width: 40rem;
        position: fixed;
        right: 5%;
        top: 5rem;
        border-radius: ${p => p.theme.radius.md};
        box-shadow: ${p => p.theme.shadow.md}
    }
`

export const Empty = styled.div`
    text-align: center;
    font-size: 2rem;
    margin-top: 6rem; 
`