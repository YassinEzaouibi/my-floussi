import React, { useState, memo } from 'react'
import Input from '../../utils/jsx/Input'
import Etape from './Etape'

import TextField from '@mui/material/TextField';

const Etape2 = () => {
    const [age, setAge] = useState('')
    const [budgetIdeal, setBudgetIdeal] = useState('')
    const [epargne, setEpargne] = useState('')

    return (
        <Etape title='Dite nous plus sur vous' buttonTitle={'Suivant'} buttonDisabled={!(age && budgetIdeal && epargne)}>
            <div className='p-3 flex flex-col gap-8 justify-center bg-light-blue align-middle rounded-md w-full  '>
                <TextField
                    value={age}
                    id="filled-basic"
                    label="Votre âge"
                    variant="filled"
                    onChange={(e) => {
                        setAge(e.target.value)
                    }}
                    type='number'
                />
                <TextField
                    id="filled-basic"
                    label="Budget idéal à l'indépendance"
                    variant="filled"
                    value={budgetIdeal}
                    onChange={(e) => {
                        if (e.target.value.match(/^\d*\.?\d{0,2}$/)) {
                            setBudgetIdeal(e.target.value)
                        }
                    }}

                    placeholder='$'

                />
                <TextField
                    value={epargne}
                    id="filled-basic"
                    label="Votre épargne mensuel"
                    variant="filled"
                    onChange={(e) => {
                        if (e.target.value.match(/^\d*\.?\d{0,2}$/)) {
                            setEpargne(e.target.value)
                        }
                    }}
                    placeholder='$'
                />
            </div>
        </Etape>
    )
}

export default memo(Etape2)