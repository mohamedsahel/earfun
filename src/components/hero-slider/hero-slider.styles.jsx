import styled from 'styled-components';

import { Icon } from '..'


export const Container = styled.div`
    height: ${p => p.windowHeight - 50 + 'px'};
    max-height: 100vh;
    padding-bottom: 1rem;

    @media (min-width: 800px) {
        padding: 4rem;
        padding-bottom: 3rem;
        padding-top: 5rem;
    }
`

export const SlidesWrapper = styled.div`
    position: relative;
    height: 90%;
    max-width: 112rem;
    margin: auto;
`

export const StyledIcon = styled(Icon)

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 7%;
    margin-top: 3%;
    padding-right: 1.6rem;
    padding-left: 1.6rem;

    @media (min-width: 800px) {
        padding: 0;
        margin-top: 1.5%;
    }
`