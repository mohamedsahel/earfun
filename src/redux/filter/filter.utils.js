

export const toggleInSet = (set, value) => {
    console.log(set, value)
    if(Array.isArray(value)) {
        set = value
    } else {
        if(set.has(value))  set.delete(value)
        else  set.add(value)
    }

    return new Set(set)
}