import styled, { css, keyframes } from 'styled-components'

const zoom = keyframes`
    0% {
        opacity: 0;
        height: 100%;
        width: 100%;
    }
    80% {
        opacity: 1;
        height: 300%;
        width: 300%;
    }
    100% {
        opacity: 0;
        height: 100%;
        width: 100%;
    }
`

export const CheckBox = styled.span`
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 1.2rem;
        height: 1.2rem;
        padding: 0.1rem;
        border: 0.1rem solid ${p => p.theme.colors.blue};
        border-radius: 0.3rem;
        cursor: pointer;

        &::after {
            content: '';
            display: block;
            height: 0;
            width: 0;
            background: ${p => p.theme.colors.blue};
            border-radius: inherit;
            transition: all 0.2s ease-in;
        }

        &::before {
            content: '';
            display: block;
            background: ${p => p.theme.colors.transparent_05};
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
        }
        

        ${p => p.checked && css`

            &::before {
                animation: ${zoom} 0.3s;
            }

            &::after {
                height: 100%;
                width: 100%;
            }
        ` }

` 

