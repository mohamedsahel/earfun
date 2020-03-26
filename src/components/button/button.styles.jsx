import styled from 'styled-components'

export const Container = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    border: ${p => !p.inverted ? 'none' : '0.1rem solid' + p.theme.colors.black};
    padding: 1rem 2rem;
    border-radius: ${p => p.theme.radius.sm};
    color: ${p => p.inverted ? p.theme.colors.black : p.theme.colors.white};
    background: ${p => p.inverted ? 'transparent' : p.theme.colors.black };

    ${p => p.style}

    &:hover {
        ${p => p.inverted && {
            color: p.theme.colors.white,
            background: p.theme.colors.black
        }}

        svg path {
            ${p => p.inverted && {
            fill: p.theme.colors.white,
        }} 
        }
    }


`