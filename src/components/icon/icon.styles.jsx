import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${p => p.size};
    height: ${p => p.size};
    border-radius: 50%;

    svg {
        display: inline-block;
        width: ${p => p.svgSize};
        height: ${p => p.svgSize};

        * {
            fill: ${p => p.theme.colors.black};
        }

        line {
            stroke: ${p => p.theme.colors.black};
        }

    }
`