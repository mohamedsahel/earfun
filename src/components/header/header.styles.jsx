import styled, { css } from 'styled-components'

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    height: 5rem;
    width: 100%;
    background: ${p => p.theme.colors.light2};
    ${p => !p.noShadow ? css`
        box-shadow: 0 0 0.8rem ${p => p.theme.colors.transparent_05},
                    0 0 1.6rem ${p => p.theme.colors.transparent_05};
    ` : css`
        box-shadow: none;
    `
    }

    @media (min-width: 800px) {
        top: 0;
    }
`