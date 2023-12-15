import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { addEmprunt, fillEmprunts, setTempUserResponses } from '../../redux/questionnaireSlice';
import uuid from 'react-uuid';


import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { isValidDate } from '../../utils/isValidDate';
import { generateDate } from '../../utils/generateDate';
import calculateDateDifference, { getDateDifference } from '../../utils/calculateDiffDates';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function EmpruntModal({ open, setOpen, categorieId, questionId }) {
    const dispatch = useDispatch()
    const today = new Date()


    const [monthly, setMonthly] = useState('')
    const [yearsLeft, setYearsLeft] = useState('')
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [dateEcheance, setDateEcheance] = useState('')
    const [rest, setRest] = useState('')
    const [error, setError] = useState(null)
    const empruntDataFilled = monthly && name && !(error)
    const { emprunts } = useSelector(state => state.questionnaire)


    const handleClose = () => {
        setMonthly('')
        setYearsLeft('')
        setName('')
        setDate('')
        setOpen(false);
    }
    const handleDate = (newDate) => {
        setDate(newDate)
    }


    const _addEmprunt = () => {
        dispatch(addEmprunt({
            categorieId,
            questionId,
            emprunt: {
                id: uuid(),
                name,
                monthly,
                rest
            }
        }))

        dispatch(fillEmprunts())

        // dispatch(setTempUserResponses({
        //     question: 'emprunts',
        //     emprunts
        // }))

        setMonthly('')
        setYearsLeft('')
        setName('')
        setOpen(false)

    }

    useEffect(() => {

        setDateEcheance(generateDate(date))
        const rest = getDateDifference(today, date)
        setRest(rest)
        dispatch(setTempUserResponses({
            question: 'emprunts',
            emprunts
        }))
    }, [date, error, dateEcheance, emprunts])
    return (
        <div className=''>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ ...style, borderRadius: 2, marginTop: 10 }}>
                    <div className=' flex border border-grayLight px-5 py-2 bg-white mb-5 rounded-md'>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type={'text'}
                            placeholder='Nom'
                            className=' w-[100%] outline-none bg-transparent' />
                    </div>
                    <div className=' flex border border-grayLight px-5 py-2 bg-white mb-5 rounded-md'>
                        <input
                            onChange={(e) => setMonthly(e.target.value)}
                            value={monthly}
                            type={'number'}
                            placeholder='Mensualités'
                            className=' w-[95%] outline-none bg-transparent' />
                        <h6 className=' text-grayLight text-sm text-center w-fit  bg-white'>mad</h6>
                    </div>

                    <div className=' flex justify-center my-6  '>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                onError={(e) => {
                                    setError(e)
                                }}
                                value={date}
                                label="La date d'échéance"
                                format='DD/MM/YYYY'
                                onChange={handleDate}
                                minDate={dayjs(today)}
                            />

                        </LocalizationProvider>
                    </div>

                    <div className=' flex justify-center gap-4'>

                        <button
                            onClick={_addEmprunt}
                            style={{
                                opacity: empruntDataFilled ? 1 : 0.5,
                                cursor: empruntDataFilled ? 'pointer' : 'not-allowed'
                            }}
                            disabled={!empruntDataFilled}

                            className=' text-white bg-mainLight  h-[50px] w-[90px] px-2 py-4 cursor-pointer transition-all duration-300 hover:scale-105  flex items-center justify-center text-center'>Ajouter</button>


                        <button
                            onClick={handleClose}
                            className=' opacity-70 text-grayLight border border-grayLight bg-transparent h-[50px] w-[90px] px-2 py-4 cursor-pointer transition-all duration-300 hover:opacity-100 flex items-center justify-center text-center'>Annuler</button>

                    </div>

                </Box>
            </Modal>
        </div>
    );
}