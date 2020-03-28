import React  from 'react'
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types'

import { Button, Icon } from "../";

import * as S from './hero-slider-slide.styles'

const HeroSliderSlide = ({ item:{title, price, imageUrl}, showen }) => {
    const dispatch = useDispatch()
    return (
        <S.Container showen={showen} >
            <S.Image src={imageUrl} />
            <S.Title>{title}</S.Title>
            <S.Price>$ {price}</S.Price>
            <Button style={{
                padding: '1.2rem 2.4rem',
                borderRadius: '10rem',
                fontWeight: '500'
            }} 
            onClick={() => dispatch({type: 'CHANGE_MODE'})}
            inverted>
                <Icon 
                icon='bag' 
                svgSize='90%' 
                size='1.8rem' />
                <span>Bag it</span>
            </Button>
        </S.Container>
    )
}

HeroSliderSlide.propTypes = {
    item: PropTypes.object,
    showen: PropTypes.bool
}

export default HeroSliderSlide