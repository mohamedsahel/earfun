import styled from 'styled-components'


export const Title = styled.h1`
    font-size: 2.6rem;
    font-weight: 900;
    margin-top: 6vh;
`

export const Price = styled.span`
    font-size: 2rem;
`

export const Image = styled.img`
    margin: auto;
    height: 60%;
`


export const Container = styled.div`
    height: 100%;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 0;
    visibility: ${p => p.showen ? 'visible' : 'hidden'};

    > * {
        display: block;
        margin-top: 3vh;
    }

    ${Title} {
        margin-top: 4vh;
    }

    @media (min-width: 800px) {
        text-align: left;

        > * {
            margin-top: 4rem;
        }

        ${Image} {
            float: right;
            max-height: 80%;
            height: 100%;
        }

        ${Title} {
            font-size: 4rem;
            font-weight: 900;
            margin-top: 6rem;
        }

        ${Price} {
            font-size: 2.8rem;
            font-weight: 500;
        }
    }

    @media (min-width: 1024px) {
        ${Title} {
            font-size: 5rem;
        }
    }
`

