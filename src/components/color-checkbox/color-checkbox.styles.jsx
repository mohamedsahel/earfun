import styled, { css } from 'styled-components'

export const ColorCheckbox = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    border: 0.1rem solid transparent;
    border-radius: 50%;
    padding: 0.4rem;
    transition: all 0.2s;
    cursor: pointer;

    ${p => p.checked && css`
        border: 0.1rem solid ${p.color === 'white' ? 'gray' : p.color };
    `}

    &::after {
        content: '';
        height: 100%;
        width: 100%;
        background: ${p => p.color};
        border: 0.1rem solid ${p => p.color === 'white' ? 'gray' : 'transparent'};
        border-radius: inherit;
    }
`