import styled, { keyframes } from 'styled-components'

const scaleOpacity = keyframes`
    0% {
        opacity: 0;
    } 
    100% {
        opacity: 1;
    } 
`

export const Background = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    animation: ${scaleOpacity} 0.2s ease-in;
    z-index: 20;
`

const scale = keyframes`
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.95);
    } 
    100% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    } 
`

export const Container = styled.div`
    animation: ${scale} 0.2s ease-in;
    position: absolute;
    top: 50%;
    left: 50%;
    box-shadow: ${p => p.theme.shadow.md};
    border-radius: ${p => p.theme.radius.sm};
    transform : translate(-50%, -50%);
    background: ${p => p.theme.colors.light};
`