import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 4rem;
    width: 15rem;
`

export const CountButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 100%;
    background: ${p => p.theme.colors.transparent_05};
    cursor: pointer;
    font-size: 2rem;
    user-select: none;

    ${p => p.left && css`
        border-top-left-radius: ${p => p.theme.radius.sm};
        border-bottom-left-radius: ${p => p.theme.radius.sm};
    ` }

    ${p => p.right && css`
        border-top-right-radius: ${p => p.theme.radius.sm};
        border-bottom-right-radius: ${p => p.theme.radius.sm};
    ` }

    &:hover {
        background: ${p => p.theme.colors.transparent_10};
    }

    &:active {
        background: ${p => p.theme.colors.transparent_15};
    }
`

export const CountInput = styled.input`
    width: 6.6rem;
    height: 100%;
    border: 1px solid ${p => p.theme.colors.gray_2};
    background: transparent;
    font-size: 1.8rem;
    text-align: center;
    color: ${p => p.theme.colors.black}
`