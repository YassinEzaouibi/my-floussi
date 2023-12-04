export const removeNonNumericProperties = (obj) => {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] !== 'number') {
            delete obj[key];
        }
    }
}

// const revenusData = Object.values(_data.revenus)
// const totalRevenus = revenusData.reduce((prev, cur) => prev + cur)
export const getTotal = (obj) => {
    const _obj = { ...obj }
    removeNonNumericProperties(_obj)
    return Object.values(_obj).reduce((prev, cur) => prev + cur)
}

// const totalRevenus = getTotal(_data.revenus)

export const getTotalOfArrayObject = (arr = []) => {
    let total = 0
    for (const obj of arr) {
        total += getTotal(obj)
    }
    return total
}

export const getTotalAmountOfCategory = (arr = []) => {
    let total = 0
    for (const obj of arr) {
        total += getTotalOfArrayObject(obj.data)
    }
    return total
}