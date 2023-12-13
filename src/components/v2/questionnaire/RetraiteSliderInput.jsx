import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}`;
}

export default function RetraiteSlider({ t1, t2, onChange, v }) {
    return (
        <div className=' w-[100%]  my-6'>

            <div className=' text-black flex justify-center gap-x-6 opacity-70'>
                <h6 className=' text-center '>Je prevois de prendre ma retraite a </h6>

                <h6 className=' text-center '> <span className=' text-red'>{v}</span> ans</h6>
            </div>
            <div className=' w-[40%] mx-auto'>
                <Slider
                    aria-label="Temperature"
                    defaultValue={51}
                    getAriaValueText={valuetext}
                    min={50}
                    max={65}
                    size='small'
                    value={v}
                    onChange={onChange}
                />
            </div>
            <div className='  flex justify-between opacity-70'>
                <h6 className=' text-left text-mainLight'>{t1}</h6>
                <h6 className=' text-right text-black'>{t2}</h6>
            </div>
        </div>
    );
}