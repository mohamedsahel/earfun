import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../../components'
 
import * as S from './nomatchpage.styles'

const NoMatchPage = () => {
    return (
        <S.Container>
            <S.Image src='https://i.imgur.com/A040Lxr.png' />
            <S.Title>You are Lost in Space</S.Title>
            <Link to='/' >
                 <Button>Go back to home</Button>
            </Link>
        </S.Container>
    )
}


export default NoMatchPage