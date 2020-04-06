import styled from 'styled-components'


export const Container = styled.div`
    height: 70vh;
    width: 90vw;
    max-width: 40rem;
    padding: 2rem;
    margin: 2rem auto 7.6rem auto;
    font-size: 1.8rem;
    font-weight: 500;
    overflow-Y: scroll;


    > *:not(:first-child){
        margin-top: 4rem;
    }
`

export const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    width: 100%;
    padding: 1.6rem;
    position: fixed;
    bottom: 0;
    box-shadow: ${p => p.theme.shadow.sm};
    transform: translateX(-2rem);
`

export const Cancel = styled.span`
    color: ${p => p.theme.colors.gray_5};
    margin-right: 2.6rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        color: ${p => p.theme.colors.gray_6};
    }
`