import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { addEmprunt } from '../../redux/questionnaireSlice';
import uuid from 'react-uuid';


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

    const [monthly, setMonthly] = useState('')
    const [yearsLeft, setYearsLeft] = useState('')
    const [name, setName] = useState('')
    const empruntDataFilled = monthly && yearsLeft && name


    const handleClose = () => {
        setMonthly(0)
        setYearsLeft(0)
        setName('')
        setOpen(false);
    }


    const _addEmprunt = () => {
        dispatch(addEmprunt({
            categorieId,
            questionId,
            emprunt: {
                id: uuid(),
                name,
                monthly,
                yearsLeft
            }
        }))
        setOpen(false)
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ ...style, borderRadius: 2 }}>
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

                    <div className=' flex border border-grayLight px-5 py-2 bg-white mb-5 rounded-md'>
                        <input
                            value={yearsLeft}

                            onChange={(e) => setYearsLeft(e.target.value)}
                            type={'number'}
                            placeholder='Années restantes'
                            className=' w-[95%] outline-none bg-transparent'
                        />
                        <h6 className=' text-grayLight text-sm text-center w-fit  bg-white'>ans</h6>
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