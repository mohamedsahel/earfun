
export const getDiscountedValue = (value, discount) => Math.floor(value - (value * discount) / 100)

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