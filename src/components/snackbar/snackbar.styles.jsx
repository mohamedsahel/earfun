import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: fixed;
    left: 50%;
    bottom: -10rem;
    transform: translateX(-50%);
    padding: 1.6rem 2.6rem 1.6rem 2.6rem;
    border-radius: ${p => p.theme.radius.sm};
    white-space: nowrap;
    background: #d2ffe2;
    font-size: 1.6rem;
    font-weight: 500;
    color: black;
    transition: all 0.2s ease-in-out;
    z-index: 11;

    ${p => p.isShown && css`
        bottom: 4rem;
    ` }
` 