import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}%`;
}

export default function Sider({ title, t1, t2, onChange, v }) {
    return (
        <Box sx={{ width: '100%', marginTop: 2 }}>
            <h5 className=' text-grayLight text-left mb-3 opacity-80 text-sm font-light'>{title}</h5>
            <div className=' text-black flex justify-between opacity-70'>
                <h6 className=' text-left'>{v}%</h6>
                <h6 className=' text-right'>{100 - v}%</h6>
            </div>
            <Slider
                aria-label="Temperature"
                defaultValue={0}
                getAriaValueText={valuetext}
                // color="warning"
                min={0}
                max={100}
                size='small'
                value={v}
                onChange={onChange}
            />
            <div className='  flex justify-between opacity-70'>
                <h6 className=' text-left text-mainLight'>{t1}</h6>
                <h6 className=' text-right text-black'>{t2}</h6>
            </div>
        </Box>
    );
}