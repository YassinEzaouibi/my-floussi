import React, { useState, useEffect } from 'react'
import AgeInput from './AgeInput'
import RetraiteSlider from './RetraiteSliderInput'
import dayjs from 'dayjs';
import { isValidDate } from '../../../utils/isValidDate';
import { generateDate } from '../../../utils/generateDate';
import Validation from './Validation';
import { useDispatch } from 'react-redux';
import { setTempUserResponses, setUserHasSelectedChoice } from '../../../redux/questionnaireSlice';

const AgeRetraite = () => {
    const dispatch = useDispatch()
    const [date, setDate] = useState('');
    const [dateNaissance, setDateNaissance] = useState('')
    const [retraite, setRetraite] = useState(51)
    const handleRetraiteChange = (e, v) => {
        setRetraite(v)
    }

    useEffect(() => {
        const valideDate = isValidDate(date)
        if (isValidDate(valideDate)) {
            setDateNaissance(generateDate(date))
        }

        if (isValidDate(dateNaissance) && retraite) {
            dispatch(setUserHasSelectedChoice(true))

            dispatch(setTempUserResponses({
                question: 'Age de retraite',
                response: retraite,

            }))
        }
        dispatch(setTempUserResponses({
            question: 'Age de retraite',
            response: retraite,

        }))

        // console.log(typeof dateNaissance)


    }, [date, dateNaissance, retraite])
    return (
        <div className=' my-6  '>
            <AgeInput date={date} setDate={setDate} />
            <RetraiteSlider v={retraite} onChange={handleRetraiteChange} />
            <div className='w-[60%] mx-auto '>
                <Validation />
            </div>
        </div>
    )
}

export default AgeRetraite