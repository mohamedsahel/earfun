import { createSelector } from "reselect"

const shopSelector = state => state.shop

export const shopItemsSelector = createSelector(
    shopSelector,
    shop => shop.shopItems
)

export const displayedItemsSelector = createSelector(
    shopSelector,
    shop => shop.displayedItems
)
