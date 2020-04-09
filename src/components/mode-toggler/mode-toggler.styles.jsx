import styled, { css } from 'styled-components'

import { ReactComponent as SunIcon } from '../../assests/icons/sun-icon.svg'
import { ReactComponent as MoonIcon } from '../../assests/icons/moon-icon.svg'
import { Icon } from ".."

export const _Icon = styled(Icon)`
    margin: auto 1.5rem auto 0.8rem;

    &:hover {
        background: transparent;
    }
`

export const _SunIcon = styled(SunIcon)`
    width: 3rem;
`

export const _MoonIcon = styled(MoonIcon)`
    width: 3rem;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 11rem;
    height: 4rem;
    box-shadow: ${p => p.theme.shadow.sm};
    border-radius: ${p => p.theme.radius.hg};
    position: fixed;
    top: 6.5rem;
    right: 0rem;
    margin-right: -7.7rem;
    background: ${p => p.theme.colors.light};
    z-index: 13;
    transition: margin 0.4s;

    @media (pointer: fine) and (hover: hover) {
        cursor: pointer;
    }
    
    ${p => p.isOpen && css`
        margin-right: -2rem;

        ${_Icon} {
            transform: rotate(180deg)
        }
    `}
`