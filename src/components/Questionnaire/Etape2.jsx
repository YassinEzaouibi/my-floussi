import React from 'react'
import Input from '../../utils/jsx/Input'
import Etape from './Etape'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Etape2 = () => {
    return (
        <Etape title='Dite nous plus sur vous' >
            <div className='p-3 flex flex-col gap-8 justify-center  '>
                <TextField id="outlined-basic" label="Outlined" variant="outlined"
                sx={{borderWidth:0}}
                />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
        </Etape>
    )
}

export default Etape2