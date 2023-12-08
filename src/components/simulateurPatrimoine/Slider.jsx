import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
}

export default function Sider({ title, t1, t2, onChange, v }) {
    return (
        <Box sx={{ width: '100%', marginTop: 2 }}>
            <h5 className=' text-forth text-left mb-1 opacity-70'>{title}</h5>
            <div className=' text-white flex justify-between opacity-70'>
                <h6 className=' text-left'>{v}%</h6>
                <h6 className=' text-right'>{100 - v}%</h6>
            </div>
            <Slider
                aria-label="Temperature"
                defaultValue={0}
                getAriaValueText={valuetext}
                color="warning"
                min={0}
                max={100}
                size='small'
                value={v}
                onChange={onChange}
            />
            <div className=' text-white flex justify-between opacity-70'>
                <h6 className=' text-left'>{t1}</h6>
                <h6 className=' text-right'>{t2}</h6>
            </div>
        </Box>
    );
}