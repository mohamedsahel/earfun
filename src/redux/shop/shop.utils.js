
export const getFilteredItems = (items, filters) => {
    const { types, connectWith, priceRange , colors, brands, onSale } = filters
    
    return items.filter(item => ( 
            priceRange[0] <= item.price <= priceRange[1] &&
            ( !onSale || item.discount )  && 
            colors.includes(item.color)  && 
            brands.includes(item.brand)  &&
            types.includes(item.type)  && 
            connectWith.includes(item.connectWith)
    ))
}