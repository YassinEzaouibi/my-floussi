import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteEmprunt, fillEmprunts, pushEmprunts, resetEmprunts, setTempUserResponses, setUserHasSelectedChoice } from '../../../redux/questionnaireSlice'
import Trash from '../../../utils/svgs/Trash'
import EmpruntModal from '../../modal/EmpruntModal'
import AddEmprunt from './AddEmprunt'
import BinaryChoices from './BinaryChoices'

const Emprunts = ({ emprunts, binaryChoices, open, setOpen, categorieId, questionId, question }) => {
    const [showEmprunts, setShowEmprunts] = useState(false)
    // const { emprunts: _emprunts } = useSelector(state => state.questionnaire)




    const onNo = () => {
        dispatch(resetEmprunts({
            categorieId,
            questionId
        }))
        dispatch(fillEmprunts())
    }

    const dispatch = useDispatch()
    const _deleteEmprunt = (id) => {
        dispatch(deleteEmprunt({
            categorieId,
            questionId,
            id
        }))

        dispatch(fillEmprunts())


        // dispatch(setTempUserResponses({
        //     question: 'emprunts',
        //     emprunts
        // }))
    }

    useEffect(() => {
        if (emprunts.length > 0) {
            dispatch(setUserHasSelectedChoice(true))

        } else {
            dispatch(setUserHasSelectedChoice(false))

        }
        // dispatch(setTempUserResponses({
        //     question: 'emprunts',
        //     emprunts
        // }))
        // dispatch(pushEmprunts())
    }, [emprunts.length])



    return (

        <>
            <BinaryChoices onNo={onNo} question={question} dataLength={emprunts.length} show={showEmprunts} setShow={setShowEmprunts} choices={binaryChoices} />
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
                                <h6 className=' text-grayLight text-sm text-center w-fit  bg-white'>Il vous rest encore {e.rest}</h6>


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