import styled from 'styled-components'

import { Button } from ".."

export const Container = styled.div`
    width: 100%;
    max-width: 60rem;
    padding: 2rem 2rem 3rem 2rem;

    > * {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: baseline;

        &:first-child {
            margin-top: 0.6rem;
        }
    }

    a {
        text-decoration: none;
    }

`

export const RowTitle = styled.h4`
    font-size: 1.6rem;
    color: ${p => p.theme.colors.gray_5};
`

export const RowTotal = styled.h4`
    font-size: 1.8rem;
    color: ${p => p.theme.colors.black};
`

export const BigTitle = styled.h4`
    font-size: 1.8rem;
    color: ${p => p.theme.colors.black};
`

export const Total = styled.h4`
    font-size: 2rem;
    font-weight: 600;
    color: ${p => p.theme.colors.black};
`

export const _CheckoutButton = styled(Button)`
    width: 100%;
    font-size: 1.8rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 1.6rem;
`