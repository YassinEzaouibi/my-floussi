import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSwiper } from "swiper/react";
import { pushResponse, refreshSliders, setUserHasSelectedChoice, clearTempUserResponses, pushEmprunts } from '../../../redux/questionnaireSlice';

const Validation = () => {

    const { tempUserResponses, userResponses } = useSelector(state => state.questionnaire)
    // console.log(userResponses)

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
                dispatch(pushResponse([...tempUserResponses]))
                dispatch(clearTempUserResponses())
                dispatch(pushEmprunts())
                swiper.slideNext()
            }}
            className=' bg-mainLight w-full text-white text-xl text-center mt-5 rounded-md shadow-sm px-5 py-3 transition-all duration-300 hover:shadow-md '>
            Valider
        </button>
    )
}

export default Validation