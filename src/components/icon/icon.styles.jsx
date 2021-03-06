import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: ${p => p.size};
    height: ${p => p.size};
    border-radius: 50%;
    
    @media (pointer: fine) and (hover: hover) {
        cursor: pointer;
        
        ${p => p.hover && css`
            &:hover {
                background: ${p => p.theme.colors.transparent_05}
            }

            &:active {
                background: ${p => p.theme.colors.transparent_10};
            }
        ` }
    }


    svg {
        display: inline-block;
        width: ${p => p.svgSize};
        height: ${p => p.svgSize};

        * {
            fill: ${p => p.fill || p.theme.colors.black};
        }

        line {
            stroke: ${p => p.fill || p.theme.colors.black};
        }

        &#arrow-icon {
            stroke: ${p => p.fill || p.theme.colors.black}
        }

        &#filter-icon {
            stroke-width: 0.2rem;
            stroke: ${p => p.fill || p.theme.colors.black}
        }

    }
`