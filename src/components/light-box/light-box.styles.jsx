import styled from 'styled-components'

export const Background = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${p => p.theme.colors.transparent_75};
    z-index: 20;
`

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    box-shadow: ${p => p.theme.shadow.md};
    border-radius: ${p => p.theme.radius.sm};
    transform : translate(-50%, -50%);
    background: ${p => p.theme.colors.light};
`