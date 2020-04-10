import styled, { css } from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 6.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Label = styled.label`
    display: block;
    position: relative;
    top: 3.2rem;
    left: 0.6rem;
    width: 30rem;
    font-size: 1.6rem;
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
    font-weight: 500;
    padding-left: 0.6rem;
    background: transparent;
    border: none;
    border-bottom: 0.2rem ${p => p.theme.colors.gray_5} solid;
    color: ${p => p.theme.colors.black};
    z-index: 2;
    transition: 0.3s all ease-in;
    
    :focus {
        border-bottom: 0.3rem ${p => p.theme.colors.black} solid;

    }

`