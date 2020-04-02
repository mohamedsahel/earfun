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

`

export const RowTitle = styled.h4`
    font-size: 1.6rem;
    color: ${p => p.theme.colors.gray_5};
`

export const RowTotal = styled.h4`
    font-size: 1.8rem;
    color: ${p => p.theme.colors.black};
`

export const ValideCoupon = styled.div`
    margin-top: 4rem;
`

export const Code = styled.span`
    font-size: 1.4rem;
    font-weight: 700;
    color: ${p => p.theme.colors.green};
`

export const Discount = styled.span`
    font-size: 1.6rem;
    font-weight: 700;
    color: ${p => p.theme.colors.red};
`

export const Coupon = styled.div`
    border: 1px ${p => p.theme.colors.black} solid;
    border-radius: ${p => p.theme.radius.sm};
    margin-top: 1rem;
    margin-bottom: 5rem;
` 

export const Input = styled.input`
    width: 70%;
    height: 100%;
    font-size: 1.4rem;
    border: none;
    padding-left: 1.2rem;
    background: transparent;
    ::placeholder {
        color: gray;
    }
`

export const Submit = styled(Button)`
    width: 30%;
    font-size: 1.4rem;
    border-radius: ${p => p.theme.radius.xs};
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