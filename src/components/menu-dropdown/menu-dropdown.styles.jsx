import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 0.05rem rgba(0, 0, 0, 0) solid;
    border-radius: ${p => p.theme.radius.sm};
    z-index: 10;
    margin-left: 4rem;

    ${p => p.isOpen && css`
        border: 0.05rem ${p => p.theme.colors.transparent_10} solid;
        background: ${p => p.theme.colors.light};
        box-shadow: ${p => p.theme.shadow.sm};
        margin-top: 7.4rem;
    `}

    > * {
        border-radius: ${p => p.theme.radius.sm};
    }
`