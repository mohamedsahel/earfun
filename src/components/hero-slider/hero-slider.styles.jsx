import styled from 'styled-components';



export const Container = styled.div`
    height: ${p => p.windowHeight + 'px'};
    max-height: 100vh;
    border: 1px blue dashed;

    @media (min-width: 800px) {
        padding: 4rem;
    }
    ${p => console.log(p.windowHeight)}
`

export const SlidesWrapper = styled.div`
    position: relative;
    height: 90%;
    max-width: 110rem;
    border: 1px green dashed;

`

export const Footer = styled.div`
    height: 7%;
    margin-top: 3%;
    border: 1px red dashed;

`