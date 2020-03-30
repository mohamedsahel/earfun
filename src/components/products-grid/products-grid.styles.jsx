import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 102.4rem;
    margin: auto;
    border: 1px red dashed;

    > * {
        border: 0.3px blue dashed;
        height: 40rem;
        width: 28rem;
        margin: 2em;
        margin-top: 4rem;
    }

`