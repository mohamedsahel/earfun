
export const getFilteredItems = (items, filters) => {
    const { types, connectWith , colors, brands, onSale } = filters
    
    return items.filter(item => ( 
            ( !onSale || item.discount )  && 
            colors.has(item.color)  && 
            brands.has(item.brand)  &&
            types.has(item.type)  && 
            connectWith.has(item.connectWith)
    ))
}



export const getNextPage = (shopItems, index) => {
    const nextPage = []
    let i = (index - 1) * 6

    while (nextPage.length < 6) {
        if(!shopItems[i]) break
        else {
            nextPage.push(shopItems[i])
        }
        i++
    }

    return nextPage
}



export const sortRandomly = array => {
    const newArray = [...array]
    let i, j, k;
    for (i = newArray.length -1; i > 0; i--) {
      j = Math.floor(Math.random() * i)
      k = newArray[i]
      newArray[i] = newArray[j]
      newArray[j] = k
    }
    return newArray
}