import { createSlice } from '@reduxjs/toolkit'
import { isNumeric } from '../utils/isNumeric';

export const smPatrimoineSlice = createSlice({
    name: 'sp',
    initialState: {
        smPatrimoineData: [],
        repInv: 50,
        repPI: 50,
        pActuel: 100000,
        invAnnuel: 6000,
        nbrAnnesEpargne: 20,
        rendBourse: 8,
        rendAutre: 5,
        txImpositionBourse: 17.20,
        txImpositionAutre: 30,
        txRetrait: 4,
        txInflation: 3,
        revenuParMois: 0,
        valeurNette: 0,
        plusValueNette: 0,
        versementCumule: 0
    },
    reducers: {
        setRepInv(state, action) {
            const value = action.payload

            state.repInv = +value

        },
        setRepPI(state, action) {
            const value = action.payload

            state.repPI = +value

        },
        setPActuel(state, action) {
            const value = action.payload
            if (isNumeric(value)) {
                state.pActuel = +value
            }
        },
        setInvAnnuel(state, action) {
            const value = action.payload
            if (isNumeric(value)) {
                state.invAnnuel = +value
            }
        },
        setNbrAnnesEpargne(state, action) {
            const value = action.payload
            if (isNumeric(value)) {
                state.nbrAnnesEpargne = +value
            }
        },
        setRendBourse(state, action) {
            const value = action.payload
            if (isNumeric(value)) {
                state.rendBourse = +value
            }
        },
        setRendAutre(state, action) {
            const value = action.payload
            if (isNumeric(value)) {
                state.rendAutre = +value
            }
        },
        setTxImpositionBourse(state, action) {
            const value = action.payload
            if (isNumeric(value)) {
                state.txImpositionBourse = +value
            }
        },
        setTxImpositionAutre(state, action) {
            const value = action.payload
            if (isNumeric(value)) {
                state.txImpositionAutre = +value
            }
        },
        setTxRetrait(state, action) {
            const value = action.payload
            if (isNumeric(value)) {
                state.txRetrait = +value
            }
        },
        setTxInflation(state, action) {
            const value = action.payload
            if (isNumeric(value)) {
                state.txInflation = +value
            }
        },
        setRevenuParMois(state, action) {
            const value = action.payload

            state.revenuParMois = +value

        },
        setValeurNette(state, action) {
            const value = action.payload

            state.valeurNette = +value

        },
        setPlusValueNette(state, action) {
            const value = action.payload

            state.plusValueNette = +value

        },
        setVersementCumule(state, action) {
            const value = action.payload

            state.versementCumule = +value

        },
        setSmPatrimoineData(state, action) {
            state.smPatrimoineData = action.payload
        }



    }
})

export const { setRepInv, setRepPI, setInvAnnuel, setNbrAnnesEpargne, setPActuel, setPlusValueNette, setRendAutre, setRendBourse, setRevenuParMois, setTxImpositionAutre, setTxImpositionBourse, setTxInflation, setTxRetrait, setValeurNette, setVersementCumule, setSmPatrimoineData } = smPatrimoineSlice.actions


export default smPatrimoineSlice.reducer