import React, { useState, memo } from 'react'
import Etape from './Etape'

import TextField from '@mui/material/TextField';

const Etape3 = () => {
    const [comptesCourantsEtLivrets, setComptesCourantsEtLivrets] = useState('0')
    const [investissements, setInvestissements] = useState('0')
    const [immobilier, setImmobilier] = useState('0')
    const [crypto, setCrypto] = useState('0')
    const [autres, setAutres] = useState('0')

    return (
        <Etape title='Dite nous plus sur vous' buttonTitle={'Suivant'}>
            <div className='p-3 flex flex-col gap-8 justify-center bg-light-blue align-middle rounded-md w-full  '>

                <TextField
                    id="filled-basic"
                    label="Comptes courants et livrets"
                    variant="filled"
                    value={comptesCourantsEtLivrets}
                    onChange={(e) => {
                        if (e.target.value.match(/^\d*\.?\d{0,2}$/)) {
                            setComptesCourantsEtLivrets(e.target.value)
                        }
                    }}

                    placeholder='$'
                />
                <TextField
                    id="filled-basic"
                    label="Investissememts"
                    variant="filled"
                    value={investissements}
                    onChange={(e) => {
                        if (e.target.value.match(/^\d*\.?\d{0,2}$/)) {
                            setInvestissements(e.target.value)
                        }
                    }}

                    placeholder='$'
                />
                <TextField
                    id="filled-basic"
                    label="Immobilier"
                    variant="filled"
                    value={immobilier}
                    onChange={(e) => {
                        if (e.target.value.match(/^\d*\.?\d{0,2}$/)) {
                            setImmobilier(e.target.value)
                        }
                    }}

                    placeholder='$'
                />
                <TextField
                    id="filled-basic"
                    label="Crypto"
                    variant="filled"
                    value={crypto}
                    onChange={(e) => {
                        if (e.target.value.match(/^\d*\.?\d{0,2}$/)) {
                            setCrypto(e.target.value)
                        }
                    }}

                    placeholder='$'
                />
                <TextField
                    id="filled-basic"
                    label="Autre"
                    variant="filled"
                    value={autres}
                    onChange={(e) => {
                        if (e.target.value.match(/^\d*\.?\d{0,2}$/)) {
                            setAutres(e.target.value)
                        }
                    }}

                    placeholder='$'
                />

            </div>
        </Etape>
    )
}

export default memo(Etape3)