import React from 'react'
import { useDispatch } from 'react-redux'

import { cancelFiltering, applyFiltersAsync } from '../../redux/filter/filter.actions'

import { Modal, Filter, OnsaleFilter, Button } from '..'

import * as S from './filter-modal.styles'

const FilterModal = () => {
    const dispatch = useDispatch()
    return  (
        <Modal>
            <S.Container>
                <Filter filterName='types' />
                <Filter filterName='connectWith' />
                <Filter filterName='colors' />
                <Filter filterName='brands' />
                <OnsaleFilter />
                <S.Actions>
                    <S.Cancel
                    onClick={() => dispatch(cancelFiltering())}
                    > Cancel </S.Cancel>
                    <Button value='Filter'
                    onClick={() => dispatch(applyFiltersAsync())}
                     />
                </S.Actions>
            </S.Container>
        </Modal>
    )
}

export default FilterModal