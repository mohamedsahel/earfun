import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { HeroSliderSlide, Icon } from "..";

import * as S from './hero-slider.styles'

const HeroSlider = ({ items }) => {
    const [currentSlide, setCurrentSlide] = useState(1)

    const changeCurrentSlide = value => {
        let nextSlide
        if(value > 0) {
            nextSlide = currentSlide === items.length ? 1 : currentSlide + 1
        } else if (value < 0) {
            nextSlide = currentSlide === 1 ? currentSlide.length : currentSlide - 1
        }

        setCurrentSlide(nextSlide)
    } 

    useEffect(() => {
        setTimeout(() => changeCurrentSlide(1),
        2000)
    })


    return (
        <S.Container>
            <S.SlidesWrapper>
                {
                items.map((item, index) => <HeroSliderSlide 
                    item={item} 
                    index={index + 1}
                    key={index}
                    showen={currentSlide === index + 1 ? true: false}
                    />)
                }
            </S.SlidesWrapper>
            <Icon icon='arrow' />
        </S.Container>
    )
}

HeroSlider.propTypes = {
    items: PropTypes.array
}


export default HeroSlider