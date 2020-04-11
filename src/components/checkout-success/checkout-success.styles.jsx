import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;

` 

export const Content = styled.div`
    text-align: center;
    width: 90%;
    max-width: 70rem;
    margin: auto;
    margin-top: 10rem;

    button {
        font-size: 1.8rem;
        padding: 1.2rem 3rem 1.2rem 3rem;
        margin-top: 6rem;
    }
`

export const BigTitle = styled.h1`
    font-size: 3.5rem;
    font-weight: 900;

    @media (min-width: 500px) {
        font-size: 5rem;
    }
`

export const SmallTitle = styled.h4`
    font-size: 1.8rem;
    font-weight: 500;
    margin-top: 2rem;
`