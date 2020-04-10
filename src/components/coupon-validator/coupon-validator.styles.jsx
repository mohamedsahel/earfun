import styled from 'styled-components'

import { Button } from ".."


export const Container = styled.div`
    margin-top: 4rem !important;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    
    > * {
        width: 100%;

        &:first-child {
            display: flex;
            justify-content: space-between;
        }
    }

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

export const UnvalideCoupon = styled.div`
    font-size: 1.4rem;
    font-weight: 700;
    color: ${p => p.theme.colors.red};
`

export const CouponForm = styled.form`
    display: flex;
    align-items: center;
    margin-top: 1rem;
    border: 1px ${p => p.theme.colors.black} solid;
    border-radius: ${p => p.theme.radius.sm};
` 

export const Input = styled.input`
    width: 70%;
    height: 100%;
    font-size: 1.4rem;
    border: none;
    padding-left: 1.2rem;
    background: transparent;
    color: ${p => p.theme.colors.black};
    ::placeholder {
        color: gray;
    }
`

export const Submit = styled(Button)`
    width: 30%;
    font-size: 1.4rem;
    border-radius: ${p => p.theme.radius.xs};
`