import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteEmprunt, setUserHasSelectedChoice } from '../../../redux/questionnaireSlice'
import Trash from '../../../utils/svgs/Trash'
import EmpruntModal from '../../modal/EmpruntModal'
import AddEmprunt from './AddEmprunt'
import BinaryChoices from './BinaryChoices'

const Emprunts = ({ emprunts, binaryChoices, open, setOpen, categorieId, questionId }) => {
    const [showEmprunts, setShowEmprunts] = useState(false)
    const dispatch = useDispatch()
    const _deleteEmprunt = (id) => {
        dispatch(deleteEmprunt({
            categorieId,
            questionId,
            id
        }))
    }

    useEffect(() => {
        if (emprunts.length > 0) {
            dispatch(setUserHasSelectedChoice(true))

        } else {
            dispatch(setUserHasSelectedChoice(false))

        }
    }, [emprunts.length])



    return (

        <>
            <BinaryChoices dataLength={emprunts.length} show={showEmprunts} setShow={setShowEmprunts} choices={binaryChoices} />
            {showEmprunts &&
                <EmpruntModal
                    categorieId={categorieId}
                    questionId={questionId}
                    open={open}
                    setOpen={setOpen}
                />}
            {emprunts && showEmprunts && emprunts.map((e) => (
                <div
                    key={e.id}
                    className=' my-7'>
                    <h5 className=' text-center text-grayLight mb-5'>{e.name}</h5>
                    <div className=' flex gap-x-5'>
                        <div className='w-full'>
                            <div className=' flex border border-grayLight px-5 py-2 bg-white mb-5 rounded-md'>
                                <input
                                    value={e.monthly}
                                    readOnly
                                    type={'number'}
                                    placeholder='Mensualités'
                                    className=' w-[95%] outline-none bg-transparent cursor-default' />
                                <h6 className=' text-grayLight text-sm text-center w-fit  bg-white'>MAD</h6>
                            </div>

                            <div className=' flex border border-grayLight px-5 py-2 bg-white mb-5 rounded-md'>
                                <input
                                    value={e.yearsLeft}
                                    readOnly
                                    type={'number'}
                                    placeholder='Années restantes'
                                    className=' w-[95%] outline-none bg-transparent cursor-default'
                                />
                                <h6 className=' text-grayLight text-sm text-center w-fit  bg-white'>ans</h6>
                            </div>
                        </div>



                        <Trash onClick={() => _deleteEmprunt(e.id)} />


                    </div>







                </div>
            ))}
            {showEmprunts && <AddEmprunt setOpen={setOpen} />}
        </>

    )
}

export default Emprunts