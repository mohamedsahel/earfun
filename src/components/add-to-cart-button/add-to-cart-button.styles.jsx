import styled from 'styled-components'



export const PlusIcon = styled.div`
    position: absolute;
    top: 22rem;
    right: 2rem;
    height: 6rem;
    width: 6rem;
    font-size: 3rem;
    font-weight: 500;
    line-height: 210%;
    text-align: center;
    background: white;
    color: black;
    border-radius: ${p => p.theme.radius.fifty};
    box-shadow: ${p => p.theme.shadow.sm};
    cursor: pointer;


    svg path {
        fill: black;
        stroke: black;
        stroke-width: 2rem;
    }

    :hover {
        background: white;
        box-shadow: ${p => p.theme.shadow.md};
    }

    :active {
        background: ${p => p.theme.colors.transparent_15};

    }
` 
