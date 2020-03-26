import React from 'react'
import { Button, Icon } from "../"

import * as S from './icon-text-button.styles'

const IconTextButton = () => {
    return (
        <Button style={{
            padding: '1.2rem 3rem',
            borderRadius: '10rem'
        }} 
        inverted>
            <Icon 
            icon='bag' 
            svgSize='90%' 
            size='1.8rem' />
            <S.ButtonValue>Bag it</S.ButtonValue>
        </Button>
    )
}

export default IconTextButton