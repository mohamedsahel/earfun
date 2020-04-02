import styled from 'styled-components'


const AspectRatioBox = styled.div`
    width: ${p => p.width && '100%'};

    &::after {
        content: '';
        display: block;
        padding-top: ${p => {
            const ratio = p.ratio || '1/1'
            const width = +ratio.split('/')[0],
                  height = +ratio.split('/')[1]
            return 100 / (width / height) + '%'
        }};
    }
` 

export default AspectRatioBox