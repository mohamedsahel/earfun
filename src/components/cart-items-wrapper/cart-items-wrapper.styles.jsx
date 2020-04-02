import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    max-width: 60rem;
    padding: 1rem;

    > * {
        margin-top: 5rem;

        &:first-child {
            margin-top: 0rem;
        }
        
        &:not(:last-child) {
            &::after {
                grid-area: break;
                content: '';
                height: 0.1rem;
                width: 80%;
                margin-top: 3rem;
                background: ${p => p.theme.colors.transparent_05};
                border-radius: 1rem;
                justify-self: center;
            }
        }
    }
`