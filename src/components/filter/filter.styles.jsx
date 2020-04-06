import styled from 'styled-components'
import { BasicCheckbox, ContentCheckbox } from ".."

export const Container = styled.div`
    width: 20rem;
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
    margin-top: 1rem;
    > * {
        margin-top: 0.3rem;
    }
`

export const _ContentCheckbox = styled(ContentCheckbox)`
    text-transform: capitalize;

    svg {
        height: 4rem;
        margin-right: 1.6rem;
    }
`

// export const Icon = {
//     headphones: styled(Icon)`
//     &:hover {
//         background: none;
//     }
// `
// }