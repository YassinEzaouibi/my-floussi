import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useSwiper } from "swiper/react";
import { refreshSliders, setUserHasSelectedChoice } from '../../../redux/questionnaireSlice';

const Validation = ({ onClick }) => {
    const dispatch = useDispatch()
    const pass = useSelector(state => state.questionnaire.userHasSelectedChoice)
    const swiper = useSwiper()

    return (
        <button
            disabled={!pass}
            style={{
                opacity: pass ? 1 : 0.5,
                cursor: pass ? 'pointer' : 'not-allowed'
            }}
            onClick={() => {
                dispatch(refreshSliders())
                dispatch(setUserHasSelectedChoice(false))
                swiper.slideNext()
            }}
            className=' bg-mainLight w-full text-white text-xl text-center mt-5 rounded-md shadow-sm px-5 py-3 transition-all duration-300 hover:shadow-md '>
            Valider
        </button>
    )
}

export default Validation