import React from 'react'

import Slider from '@mui/material/Slider';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSommePlacee } from '../../../../redux/tarifsSlice';
import { addSpacesToNumber } from '../../../../utils/sankeyData/sankeyCalucaltors';

function valuetext(value) {
    return (
        <div className=' w-[100px] lg:w-[200px] h-fit p-2 lg:p-5'>
            <h6 className=' text-white text-sm lg:text-lg text-center'>somme placée</h6>
            <p className='  text-center flex items-center justify-center text-white text-md lg:text-2xl'>{`${addSpacesToNumber(value)} MAD`}</p>
        </div>)
        ;
}
const TarifsSlider = () => {
    const dispatch = useDispatch()

    const { sommePlacee } = useSelector(state => state.tarifs)
    const handleChange = (e, v) => {
        dispatch(setSommePlacee(v))
    }

    return (
        <div className=' w-[80%] mx-auto my-5'>
            <Slider
                aria-label="Always visible"
                defaultValue={0}
                valueLabelFormat={valuetext}
                min={0}
                step={500}
                max={1000000}
                size='medium'
                valueLabelDisplay="on"
                value={sommePlacee}
                onChange={handleChange}
            />

        </div>
    )
}

export default TarifsSlider