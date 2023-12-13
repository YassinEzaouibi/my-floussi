import { createSlice } from '@reduxjs/toolkit'
import { questions } from '../utils/questionnaire/data';




export const questionnaireSlice = createSlice({
    name: 'sp',
    initialState: {
        questions,
        userHasSelectedChoice: false,
        refreshSlidersState: false,
        userResponses: [
            {

            }
        ]
    },
    reducers: {

        addEmprunt(state, action) {
            const { categorieId, questionId, emprunt } = action.payload

            const categoryIndex = state.questions.findIndex(c => c.id === categorieId)
            const questionIndex = state.questions[categoryIndex].questions.findIndex(q => q.id === questionId)

            state.questions[categoryIndex].questions[questionIndex].emprunts.push(emprunt)
        },
        deleteEmprunt(state, action) {
            const { categorieId, questionId, id } = action.payload

            const categoryIndex = state.questions.findIndex(c => c.id === categorieId)
            const questionIndex = state.questions[categoryIndex].questions.findIndex(q => q.id === questionId)
            const empruntIndex = state.questions[categoryIndex].questions[questionIndex].emprunts.findIndex(e => e.id === id)
            state.questions[categoryIndex].questions[questionIndex].emprunts.splice(empruntIndex, 1)
        },

        setInputValue(state, action) {
            const { categorieId, questionId, id, value } = action.payload
            const categoryIndex = state.questions.findIndex(c => c.id === categorieId)
            const questionIndex = state.questions[categoryIndex].questions.findIndex(q => q.id === questionId)
            const inputIndex = state.questions[categoryIndex].questions[questionIndex].inputs.findIndex(e => e.id === id)
            state.questions[categoryIndex].questions[questionIndex].inputs[inputIndex].value = +value
        },

        setUserHasSelectedChoice(state, action) {
            state.userHasSelectedChoice = action.payload
        },
        refreshSliders(state) {
            state.refreshSlidersState = !state.refreshSlidersState
        }


    }
})

export const { addEmprunt, deleteEmprunt, setEmprunt, setUserHasSelectedChoice, refreshSliders, setInputValue } = questionnaireSlice.actions


export default questionnaireSlice.reducer