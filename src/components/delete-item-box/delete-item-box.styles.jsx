import styled from 'styled-components'

import { Button } from ".."


export const Container = styled.div`
    margin: 0rem 2rem 2rem 2rem;
    font-size: 1.8rem;
    min-width: 28rem;
`

export const Quation = styled.h3`
    font-weight: 500;
    margin-top: 2rem;
    img {
        display: inline-block;
        height: 4rem;
        transform: translateY(35%);
    }
`

export const Actions = styled.div`
    margin-top: 6rem;
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
`

export const Cancel = styled.span`
    color: ${p => p.theme.colors.gray_5};
    margin-right: 2rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        color: ${p => p.theme.colors.gray_6};
    }
`

export const ConfirmButton = styled(Button)`
`