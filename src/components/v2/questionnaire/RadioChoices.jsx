import React, { useState, useEffect } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { setTempUserResponses, setUserHasSelectedChoice } from '../../../redux/questionnaireSlice';
import { useDispatch } from 'react-redux';
import { useSwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';


export default function RadioChoices({ choices, question }) {
    const dispatch = useDispatch()
    const swiperSlide = useSwiperSlide();
    const refresh = useSelector(state => state.questionnaire.refreshSlidersState)


    const [value, setValue] = useState('');
    const [score, setScore] = useState(0)
    const [response, setResponse] = useState('')



    const handleChange = (event) => {
        dispatch(setUserHasSelectedChoice(true))
        setValue(event.target.value);
        const splitValue = value.split('-')
        const [response, score] = splitValue

        dispatch(setTempUserResponses({
            response,
            score: +score + 1,
            question
        }))
    };



    useEffect(() => {
        if (value && swiperSlide.isActive) {

            dispatch(setUserHasSelectedChoice(true))
        }

        if (swiperSlide.isActive) {

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
                        <FormControlLabel
                            key={c.id}
                            value={`${c.name}-${i}`}
                            control={<Radio />}
                            label={c.name}
                            data-index={i}
                        />
                    ))
                }
            </RadioGroup>
        </FormControl>
    );
}