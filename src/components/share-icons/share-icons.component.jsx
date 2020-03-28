import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from '..'

import * as S from './share-icons.styles'


const SHARE_LINKS = {
    facebook: url => `https://www.facebook.com/sharer/sharer.php?u=${url}`,

    pinterest: (url, text, mediaSrc) => `https://pinterest.com/pin/create/button/?url=${url}&media=${mediaSrc}&description=${text}`,

    twitter: (url, text) => `https://twitter.com/intent/tweet/?text=${text}&url=${url}`,
}

const ShareIcons = ({ url, text, mediaSrc }) => {
    const icons = ['facebook', 'pinterest', 'twitter']
    const encodeUrl = encodeURI(url)
    const encodeText = encodeURI(text)
    const encodeMediaSrc = encodeURI(mediaSrc)  

    return (
        <S.Container>
        {
            icons.map((icon, index) => (
                <a key={index}
                 href={SHARE_LINKS[icon](encodeUrl, encodeText, encodeMediaSrc)} 
                 target='_blank' 
                 rel="noopener noreferrer"
                 >
                    <S.StyledIcon icon={icon} size='3.6rem' svgSize='50%' />
                </a>
            ))
        }
        </S.Container>
        
    )
}

ShareIcons.propTypes = {
    url: PropTypes.string.isRequired,
    text: PropTypes.string,
    mediaSrc: PropTypes.string
}

export default ShareIcons