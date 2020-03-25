import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    display: grid;
    grid-template-columns: 100px 100px;
    grid-template-rows: 1fr 3fr;
    grid-template-areas: 
        'title img'
        'price img';
    
`

export const Title = styled.h1`
    grid-area: title;
    border: 1px blue solid;
`

export const Price = styled.span`
    grid-area: price;
    border: 1px green solid;
`

export const Image = styled.div`
    grid-area: img;
    border: 1px red solid;
`
