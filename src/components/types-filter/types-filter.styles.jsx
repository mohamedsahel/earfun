import styled from 'styled-components'
import { BasicCheckbox, Icon, ContentCheckbox } from ".."


export const Container = styled.div`
    width: 15rem;
` 

export const Title = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.6rem;
`

export const _BasicCheckbox = styled(BasicCheckbox)`
    margin-left: 1rem;
`

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.6rem;
`

export const Label= styled.span`
    font-size: 1.6rem;
`