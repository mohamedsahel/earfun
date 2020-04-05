import styled, { css } from 'styled-components'

export const ColorCheckbox = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 6rem;
    border: 0.1rem solid transparent;
    border-radius: 50%;
    padding: 0.5rem;
    transition: all 0.2s;

    ${p => p.checked && css`
        border: 0.1rem solid tomato;
    `}

    &::after {
        content: '';
        height: 100%;
        width: 100%;
        background: tomato;
        border-radius: inherit;
    }
`