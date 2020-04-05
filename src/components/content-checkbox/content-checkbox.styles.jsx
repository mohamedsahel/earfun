import styled, { css } from 'styled-components'

export const ContentCheckbox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem 3rem 2rem 3rem;
    font-size: 1.6rem;
    border: 0.1rem solid transparent;
    background: ${p => p.theme.colors.transparent_05};
    transition: all 0.2s;

    ${p => p.checked && css`
        background: transparent;
        border: 0.1rem solid ${p => p.theme.colors.blue};
        border-radius: ${p => p.theme.radius.sm};
    `}
`