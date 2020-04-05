
export const getFilteredItems = (items, filters) => {
    const { types, connectWith, priceRange , colors, brands, onSale } = filters
    
    return items.filter(item => ( 
            priceRange[0] <= item.price <= priceRange[1] &&
            ( !onSale || item.discount )  && 
            colors.has(item.color)  && 
            brands.has(item.brand)  &&
            types.has(item.type)  && 
            connectWith.has(item.connectWith)
    ))
}