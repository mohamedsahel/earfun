import styled from 'styled-components'

export const Button = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: ${p => !p.inverted ? 'none' : '0.1rem solid' + p.theme.colors.black};
    padding: 1rem 2rem;
    border-radius: ${p => p.theme.radius.sm};
    color: ${p => p.inverted ? p.theme.colors.black : p.theme.colors.white};
    background: ${p => p.inverted ? 'transparent' : p.theme.colors.black };
    transition: background 0.2s linear;

    ${p => p.style}

    span {
        display: inline-block;
        margin-left: 1.2rem;
    }

    svg path {
        ${p => p.inverted ? {
            fill: p.theme.colors.black,
        } : { fill: p.theme.colors.white }
    } 
    }

    @media (pointer: fine) {
        &:hover {
            ${p => p.inverted ? {
                color: p.theme.colors.white,
                background: p.theme.colors.black
            } : 
            {
                background: p.theme.colors.dark
            }
        }

            svg path {
                ${p => p.inverted && {
                fill: p.theme.colors.white,
            }} 
            }
        }
    }


`