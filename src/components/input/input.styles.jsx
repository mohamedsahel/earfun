import styled, { css } from 'styled-components'


export const Container = styled.div`
    width: 30rem;
    height: 6.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Label = styled.label`
    display: block;
    position: relative;
    top: 3.2rem;
    left: 1rem;
    width: 30rem;
    font-size: 1.4rem;
    color: ${p => p.theme.colors.gray_4};
    z-index: 1;
    transition: 0.2s all ease-in;
    
    ${p => p.isFocus && css`
        top: 0;
        left: 0;
        color: ${p => p.theme.colors.black};
        font-weight: 500;
    ` }
`

export const Input = styled.input`
    width: 100%;
    height: 4rem;
    font-size: 1.6rem;
    padding-left: 1rem;
    background: transparent;
    border: none;
    border-bottom: 2px ${p => p.theme.colors.black} solid;
    /* border-radius: ${p => p.theme.radius.sm}; */
    color: ${p => p.theme.colors.black};
    z-index: 2;

    :focus {

    }

`