import styled from 'styled-components';

import { Icon } from '..'


export const Container = styled.div`
    height: ${p => p.windowHeight + 'px'};
    max-height: 100vh;
    padding-bottom: 1rem;
    padding-top: 4rem;

    @media (min-width: 800px) {
        padding: 4rem;
        padding-bottom: 3rem;
        padding-top: 10rem;
    }
`

export const SlidesWrapper = styled.div`
    position: relative;
    height: 89%;
    max-width: 112rem;
    margin: auto;
    cursor: pointer;
`

export const StyledIcon = styled(Icon)

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 7%;
    margin-top: 4%;
    padding-right: 1.6rem;
    padding-left: 1.6rem;

    @media (min-width: 800px) {
        padding: 0;
    }
`