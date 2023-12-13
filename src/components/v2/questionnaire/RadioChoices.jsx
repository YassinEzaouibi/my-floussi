import React, { useState, useEffect } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { setUserHasSelectedChoice } from '../../../redux/questionnaireSlice';
import { useDispatch } from 'react-redux';
import { useSwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';


export default function RadioChoices({ choices }) {
    const dispatch = useDispatch()
    const [value, setValue] = useState('');
    const swiperSlide = useSwiperSlide();

    const handleChange = (event) => {
        dispatch(setUserHasSelectedChoice(true))
        setValue(event.target.value);

    };

    const refresh = useSelector(state => state.questionnaire.refreshSlidersState)


    useEffect(() => {
        if (value && swiperSlide.isActive) {

            dispatch(setUserHasSelectedChoice(true))
        }
    }, [refresh])

    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
            >

                {
                    choices.map((c, i) => (
                        <FormControlLabel key={c.id} value={c.name} control={<Radio />} label={c.name} />
                    ))
                }
            </RadioGroup>
        </FormControl>
    );
}