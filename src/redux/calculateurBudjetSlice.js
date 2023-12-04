import { createSlice } from '@reduxjs/toolkit'



export const calclulateurBudjetSlice = createSlice({
    name: 'cb',
    initialState: {
        revenus: [
            { id: '###', nom: 'Salaire', montant: 1000 },
            { id: '##ß##', nom: 'ecom', montant: 300 },

        ],
        investissements: [
            {
                title: 'bources',
                id: '0**',
                data: [
                    { id: '###', nom: 'casa bourse', montant: 200 },
                    { id: '322w##', nom: 'casa x', montant: 200 }
                ]
            },
            {
                title: 'jw',
                id: '**üü*',
                data: [
                    { id: '##++#', nom: 'cmos', montant: 400 }
                ]
            },

        ],

        depences: [

            {
                title: 'vie quotidienne',
                id: '***',
                data: [
                    { id: '###', nom: 'nourriture', montant: 120 }
                ]
            },
            // {
            //     title: 'jx',
            //     id: '*ppp*',
            //     data: [
            //         { id: '#ööö##', nom: 'casa bourse', montant: 900 }
            //     ]
            // },
        ]

    },
    reducers: {
        addRevenu(state, action) {
            state.revenus.push(action.payload)
        },
        editRevenu(state, action) {
            const { id, nom, montant } = action.payload
            const revenuIndex = state.revenus.findIndex(r => r.id === id)
            state.revenus[revenuIndex].nom = nom
            state.revenus[revenuIndex].montant = montant
        },
        deleteRevenu(state, action) {
            const { id } = action.payload
            const revenuIndex = state.revenus.findIndex(r => r.id === id)
            state.revenus.splice(revenuIndex, 1)
        },

        addInvitissement(state, action) {
            const { groupId, id, nom, montant } = action.payload
            const groupIndex = state.investissements.findIndex(g => g.id === groupId)
            state.investissements[groupIndex].data.push({ id, nom, montant })
        },
        deleteInvistissements(state, action) {
            const { groupId, id, } = action.payload
            const groupIndex = state.investissements.findIndex(g => g.id === groupId)
            const itemIndex = state.investissements[groupIndex].data.findIndex(inv => inv.id === id)
            state.investissements[groupIndex].data.splice(itemIndex, 1)
        },
        editInvistissment(state, action) {
            const { groupId, id, nom, montant } = action.payload
            const groupIndex = state.investissements.findIndex(g => g.id === groupId)
            const itemIndex = state.investissements[groupIndex].data.findIndex(inv => inv.id === id)
            state.investissements[groupIndex].data[itemIndex].nom = nom
            state.investissements[groupIndex].data[itemIndex].montant = montant
        },
        addGroup(state) {
            state.investissements.push(
                {
                    title: '',
                    id: Math.random() * Math.random() / Math.random(),
                    data: [
                        { id: Math.random() * Math.random() / Math.random(), nom: '', montant: 0 },
                    ]
                }
            )

        },

        addDepence(state, action) {
            const { groupId, id, nom, montant } = action.payload
            const groupIndex = state.depences.findIndex(g => g.id === groupId)
            state.depences[groupIndex].data.push({ id, nom, montant })
        },
        deleteDepences(state, action) {
            const { groupId, id, } = action.payload
            const groupIndex = state.depences.findIndex(g => g.id === groupId)
            const itemIndex = state.depences[groupIndex].data.findIndex(inv => inv.id === id)
            state.depences[groupIndex].data.splice(itemIndex, 1)
        },
        editDepence(state, action) {
            const { groupId, id, nom, montant } = action.payload
            const groupIndex = state.depences.findIndex(g => g.id === groupId)
            const itemIndex = state.depences[groupIndex].data.findIndex(inv => inv.id === id)
            state.depences[groupIndex].data[itemIndex].nom = nom
            state.depences[groupIndex].data[itemIndex].montant = montant
        },
        addDepencesGroup(state) {
            state.depences.push(
                {
                    title: 'Nouveau group',
                    id: Math.random() * Math.random() / Math.random(),
                    data: [
                        { id: Math.random() * Math.random() / Math.random(), nom: '', montant: 0 }
                    ]
                }
            )

        },

        changeGroupTitle(state, action) {
            const { groupId, type, title } = action.payload
            // console.log(groupId)
            const groupIndex = state[type].findIndex(g => g.id === groupId)
            if (title === '') {
                state[type][groupIndex].title = 'Group sans nom'
                return
            }
            state[type][groupIndex].title = title
        },

        deleteGroup(state, action) {
            const { groupId, type } = action.payload
            const groupIndex = state[type].findIndex(g => g.id === groupId)
            state[type].splice(groupIndex, 1)
        }

    },
})

// Action creators are generated for each case reducer function
export const { addRevenu, editRevenu, deleteRevenu, addInvitissement, editInvistissment, deleteInvistissements, addGroup, addDepence, deleteDepences, editDepence, addDepencesGroup, changeGroupTitle, deleteGroup } = calclulateurBudjetSlice.actions

export default calclulateurBudjetSlice.reducer