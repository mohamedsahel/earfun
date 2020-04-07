import styled, { css } from 'styled-components'
import { BasicCheckbox, ContentCheckbox } from ".."

export const Container = styled.div`
    width: auto;
` 

export const Title = styled.div`
    display: flex;
    align-items: center;
`

export const _BasicCheckbox = styled(BasicCheckbox)`
    margin-left: 1rem;
`

export const Options = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-top: 1rem;


    > * {
        margin: 0.2rem;
        min-width: 20rem;

        ${p => p.filterName === 'colors' && css`
            margin: 1.2rem;
            min-width: auto;
        ` }
    }
`

export const _ContentCheckbox = styled(ContentCheckbox)`
    text-transform: capitalize;
    font-weight: 400;
    ${p => {
        switch(p.filterName){
            case 'types':
            case 'connectWith':
                return css`
                    padding: 0.4rem;
                    
                `
            case 'brands':
                return css`
                    padding: 1rem;
                `
        }
    }}

    svg {
        height: 6rem;
        margin-right: 1.6rem;
    }
`
