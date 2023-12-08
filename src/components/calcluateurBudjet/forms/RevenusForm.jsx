import React, { useCallback, useState, useRef, useEffect, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteDepences, deleteInvistissements, deleteRevenu, editDepence, editInvistissment, editRevenu } from '../../../redux/calculateurBudjetSlice';
import { X } from 'react-feather';
import GripDots from '../../../utils/svgs/gripDots';


const RevenusForm = ({ groupId, id, dataLength, type }) => {

    const dispatch = useDispatch()
    const nomRef = useRef(null)
    const montantRef = useRef(null)
    const montantTypeRef = useRef(null)
    const [data, setData] = useState({})
    const { revenus, depences, investissements } = useSelector(state => state.calculateurBudjet)



    const handlechange = useCallback(() => {
        const nom = nomRef.current.value
        const montant = +montantRef.current.value
        const montantType = montantTypeRef.current.value
        switch (type) {
            case 'investissements':
                if (!isNaN(montant)) {
                    dispatch(editInvistissment({
                        groupId,
                        id,
                        nom,
                        montant: montant,
                        type: montantType
                    }))
                }
                break
            case 'depences':
                if (!isNaN(montant)) {
                    dispatch(editDepence({
                        groupId,
                        id,
                        nom,
                        montant: montant,
                        type: montantType

                    }))

                }
                break
            default:
                if (!isNaN(montant)) {
                    dispatch(editRevenu({
                        id, nom, montant, type: montantType
                    }))
                }
                break;
        }
    }, [])

    const deleteItem = useCallback(() => {
        switch (type) {
            case 'investissements':
                dispatch(deleteInvistissements({
                    groupId,
                    id,
                }))
                break
            case 'depences':
                dispatch(deleteDepences({
                    groupId,
                    id,
                }))
                break
            default:
                dispatch(deleteRevenu({ id }))
                break;
        }
    }, [])

    useEffect(() => {

        switch (type) {
            case 'investissements':
                for (const item of investissements) {
                    for (const _ of item.data) {
                        if (_.id === id) {
                            setData(_)
                        }
                    }
                }
                break;
            case 'depences':
                for (const item of depences) {
                    for (const _ of item.data) {
                        if (_.id === id) {
                            setData(_)
                        }
                    }
                }
                break

            default:
                for (const item of revenus) {

                    if (item.id === id) {
                        setData(item)

                    }

                }
                break;
        }



    }, [data, type, revenus, depences, investissements])
    return (
        <div className=' flex w-full align-middle justify-start items-center  mb-1 form-container'>
            <div className='px-5  w-[50%] '>
                <h6 className=' ml-5 tracking-wide text-forth opacity-50 p-1 font-extrabold text-sm'>
                    Nom
                </h6>


                <div className="input-container">

                    <div className='flex '>
                        <GripDots />
                        <input
                            style={{ width: '100%' }}
                            ref={nomRef}
                            className="input-field placeholder-white "
                            type="text"
                            onChange={handlechange}
                            value={data.nom ?? ''}

                        />
                    </div>
                    <label htmlFor="input-field" className="input-label"></label>
                    <span className="input-highlight"></span>
                </div>
            </div>

            <div className=' w-[20%] px-5'>
                <h6 className=' ml-5 tracking-wide text-forth opacity-50 px-1 font-extrabold '>
                    Montant
                </h6>

                <div className="input-container ">
                    <input
                        style={{ width: '100%' }}
                        ref={montantRef}
                        placeholder={data.montant ? `${data.montant} M A D` : ''}
                        className="input-field placeholder-white "
                        type="text"
                        onChange={handlechange}
                        // value={data.montant ? frequence === 12 ? data.montant * 12 : data.montant : 0}
                        value={data.montant ?? 0}

                    />
                    <label htmlFor="input-field" className="input-label"></label>
                    <span className="input-highlight"></span>

                </div>


            </div>
            <div className=' w-[30%] flex items-center justify-center self-end mb-5 h-[100%]'>
                <select
                    onChange={handlechange}
                    value={data.type ?? 'm'}
                    ref={montantTypeRef}
                    className=' w-[100%] h-[30px] rounded-md outline-none text-center bg-forth'>
                    <option value={'m'}>Mensuelle</option>
                    <option value={'a'}>Annuelle</option>
                </select>
            </div>

            {
                dataLength !== 1 && <div onClick={deleteItem} className=' cursor-pointer mx-4 my-auto h-full flex align-end justify-end'>
                    <X style={{ marginTop: 40 }} color="white" size={30} />
                </div>
            }

        </div >
    )
}

export default RevenusForm