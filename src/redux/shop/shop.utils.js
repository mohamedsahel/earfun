
export const getFilteredItems = (items, filters) => {
    console.log(filters)
    const { types, connectWith , colors, brands, onSale } = filters
    
    return items.filter(item => ( 
            ( !onSale || item.discount )  && 
            colors.has(item.color)  && 
            brands.has(item.brand)  &&
            types.has(item.type)  && 
            connectWith.has(item.connectWith)
    ))
}