import styled from 'styled-components'

import { Icon } from '..'

export const Arrow = styled(Icon)`
    transform: ${p => p.sens === 'left' ? 'rotateY(180deg)' : ''}
`