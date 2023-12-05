import TextField from '@mui/material/TextField';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addDepence, addInvitissement, addRevenu, changeGroupTitle, deleteGroup } from '../../../redux/calculateurBudjetSlice'
import RevenusForm from '../forms/RevenusForm'
import { X } from 'react-feather';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { reOrder } from '../../../utils/reorder';
import GripDots from '../../../utils/svgs/gripDots';

const RevenuTab = ({ data, type, dataLength }) => {
    const _data = type === 'revenus' ? data : data.data
    const titleRef = useRef(null)
    const [title, setTitle] = useState(data.title)

    const dispatch = useDispatch()
    const addItem = useCallback(() => {
        switch (type) {
            case 'investissements':
                dispatch(addInvitissement(
                    {
                        groupId: data.id,
                        id: Math.random() * Math.random(),
                        nom: '',
                        montant: 0
                    }
                ))
                break;
            case 'depences':
                dispatch(addDepence(
                    {
                        groupId: data.id,
                        id: Math.random() * Math.random(),
                        nom: '',
                        montant: 0
                    }
                ))
                break;
            default:
                dispatch(addRevenu({ id: Math.random(), nom: '', montant: 0 }))
                break;
        }
    }, [type])

    const _deleteGroup = () => {
        dispatch(deleteGroup({ type, groupId: data.id }))
    }

    useEffect(() => {
        // console.log(data.id)
    }, [])

    return (
        <div className='  w-full h-fit  mt-7 mx-auto flex justify-center align-middle flex-col   '>

            < div className='cb-tab w-[60%] scrolable overflow-y-scroll min-h-[300px] h-fit  scroll  bg-metal rounded-md  my-2 mx-auto relative' >
                {(type === 'investissements' || type === 'depences') && <GripDots />}

                {
                    type !== 'revenus' &&
                    <div className='flex justify-center items-center'>
                        <input
                            placeholder='New group'
                            ref={titleRef}
                            value={title}
                            autoFocus={title === 'Group sans nom' || title === 'Nouveau Group'}
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}

                            onKeyUp={() => {
                                dispatch(changeGroupTitle({
                                    title,
                                    groupId: data.id,
                                    type
                                }))
                            }}
                            className=' outline-none bg-transparent align-middle capitalize tracking-wide text-forth text-center pt-5 font-extrabold text-3xl' />
                    </div>}
                <h6 className='tracking-wide text-forth text-center p-2 font-extrabold text-md border-b-gold-300 border-b-2 mb-3 opacity-50'>MAD</h6>

                {
                    <Droppable droppableId={data.id ?? '###'} type='form'>

                        {
                            (provided) => (
                                <div  {...provided.droppableProps} ref={provided.innerRef}>
                                    {
                                        _data.map((r, i) => (
                                            <Draggable draggableId={r.id} key={r.id} index={i}>
                                                {
                                                    (provided) => (
                                                        <div
                                                            {...provided.dragHandleProps}
                                                            {...provided.draggableProps}
                                                            ref={provided.innerRef}
                                                        >
                                                            <RevenusForm type={type} key={r.id} groupId
                                                                ={data.id} id={r.id} dataLength={_data.length} />
                                                            {provided.placeholder}
                                                        </div>
                                                    )
                                                }
                                            </Draggable>
                                        ))
                                    }
                                    {provided.placeholder}
                                </div>
                            )
                        }

                    </Droppable>
                }
                <h5 onClick={addItem} className='opacity-50 text-sm tracking-widest text-forth my-5 text-justify p-2 hover:opacity-80 cursor-pointer'>
                    Ajouter une source de revenu  +
                </h5>
                {dataLength > 1 &&
                    <div onClick={_deleteGroup}
                        className=' absolute top-0 right-0 cursor-pointer   '>
                        <X color="white" size={30} />
                    </div>}
            </ div>

        </div >
    )
}

export default memo(RevenuTab)