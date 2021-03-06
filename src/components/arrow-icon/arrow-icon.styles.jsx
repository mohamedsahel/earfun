import styled, { css } from 'styled-components'

import { Icon } from '..'

export const Arrow = styled(Icon)`
    transform: ${p => p.sens === 'left' ? 'rotateY(180deg)' : ''};
    height: 3.4rem;
    width: 3.4rem;


    @media (min-width: 800px) {
        height: 4.5rem;
        width: 4.5rem;

    ${p => !p.noBody ? css`
        border-radius: ${p => p.theme.radius.sm};
        height: 3.2rem;
        width: 5rem;
        
    ` : ``}
    
    }
`