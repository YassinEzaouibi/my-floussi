import { getTotalOfArrayObject } from "./getTotalOfData"

export const getRow = (source, target, amount) => {
    return [source, target, amount]
}


export const _revenus = [
    { id: '###', nom: 'salaire', montant: 3000 },
    { id: '+++', nom: 'ecom', montant: 300 }
]



export const step1 = (data = [], inv, dep) => {
    const arr = []
    for (const r of data) {
        if (r.nom && r.montant) {
            arr.push([r.nom, 'Budget', r.montant])
        }
    }
    return arr
}





export const step2 = (data = {}) => {
    const catsData = Object.values(data)
    const arr = []
    for (const cat of catsData) {
        if (Array.isArray(cat)) {
            for (const _ of cat) {
                const total = getTotalOfArrayObject(_.data)
                if (_.title !== '' && total !== 0) {
                    arr.push(
                        getRow('Budget', _.title, total)
                    )
                }
            }
        }
    }

    return arr

}

export const step3 = (cats) => {
    // console.log('data: ', cats)
    const arr = []
    for (const cat of Object.values(cats)) {
        if (Array.isArray(cat)) {
            for (const _ of cat) {
                for (const __ of _.data) {
                    // console.log('data: ', __)
                    if (__.nom && __.montant) {
                        arr.push([_.title, __.nom, __.montant])
                    }
                }
            }
        }
    }
    return arr
}