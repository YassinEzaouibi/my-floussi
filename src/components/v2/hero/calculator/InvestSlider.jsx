import React from 'react'

import Slider from '@mui/material/Slider';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


const InvestSlider = ({ v, setV }) => {
    const dispatch = useDispatch()

    const handleChange = (e, v) => {
        setV(v)
    }

    return (
        <div className='  my-6'>
            <Slider
                aria-label="Always visible"
                defaultValue={0}
                min={0}
                step={1}
                max={2000}
                size='medium'
                // valueLabelDisplay="on"
                value={v}
                onChange={handleChange}
            />

        </div>
    )
}

export default InvestSlider