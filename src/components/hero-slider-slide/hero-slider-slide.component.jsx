import React  from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Button, Icon } from "../"

import * as S from './hero-slider-slide.styles'

const HeroSliderSlide = ({ item:{title, price, imageUrl}, showen }) => {
    return (
        <S.Container showen={showen} >
            <S.Image src={imageUrl} />
            <S.Title>{title}</S.Title>
            <S.Price>$ {price}</S.Price>
            <Link 
            style={{textDecoration: 'none'}}
            to='/shop' >
                <Button style={{
                    padding: '1.2rem 2.4rem',
                    borderRadius: '10rem',
                    fontWeight: '500',
                }} 
                inverted>
                    <Icon 
                    icon='bag' 
                    svgSize='90%' 
                    size='1.8rem' />
                    <span>Shopping Now</span>
                </Button>
            </Link>
        </S.Container>
    )
}

HeroSliderSlide.propTypes = {
    item: PropTypes.object,
    showen: PropTypes.bool
}

export default HeroSliderSlide