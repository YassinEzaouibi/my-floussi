import React, { useCallback, useState, useRef, useEffect, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteDepences, deleteInvistissements, deleteRevenu, editDepence, editInvistissment, editRevenu } from '../../../redux/calculateurBudjetSlice';
import { X } from 'react-feather';


const RevenusForm = ({ groupId, id, dataLength, type }) => {
    const dispatch = useDispatch()
    const nomRef = useRef(null)
    const montantRef = useRef(null)
    const [data, setData] = useState({})
    const revenus = useSelector(state => state.calculateurBudjet.revenus)
    const investissements = useSelector(state => state.calculateurBudjet.investissements)
    const depences = useSelector(state => state.calculateurBudjet.depences)



    const handlechange = useCallback(() => {
        const nom = nomRef.current.value
        const montant = +montantRef.current.value
        switch (type) {
            case 'investissements':
                if (!isNaN(montant)) {
                    dispatch(editInvistissment({
                        groupId,
                        id,
                        nom,
                        montant
                    }))
                }
                break
            case 'depences':

                if (!isNaN(montant)) {
                    dispatch(editDepence({
                        groupId,
                        id,
                        nom,
                        montant
                    }))

                }
                break
            default:
                if (!isNaN(montant)) {
                    dispatch(editRevenu({ id, nom, montant }))
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
                        if (_.id == id) {
                            setData(_)
                        }
                    }
                }
                break;
            case 'depences':
                for (const item of depences) {
                    for (const _ of item.data) {
                        if (_.id == id) {
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
        <div className=' flex w-full align-middle justify-center'>
            <div className=' w-full px-5'>
                <h6 className='tracking-wide text-forth opacity-50 p-2 font-extrabold text-md'>
                    Nom
                </h6>


                <div className="input-container">
                    <input
                        style={{ width: '100%' }}
                        ref={nomRef}
                        // placeholder={data.nom ? data.nom : ''}
                        className="input-field placeholder-white"
                        type="text"
                        onChange={handlechange}
                        value={data.nom ?? ''}

                    />
                    <label htmlFor="input-field" className="input-label"></label>
                    <span className="input-highlight"></span>
                </div>
            </div>
            <div className=' w-full px-5'>
                <h6 className='tracking-wide text-forth opacity-50 p-2 font-extrabold text-md'>
                    Montant
                </h6>

                <div className="input-container">
                    <input
                        style={{ width: '100%' }}
                        ref={montantRef}
                        placeholder={data.montant ? `${data.montant} M A D` : 'M A D'}
                        className="input-field placeholder-white"
                        type="text"
                        onChange={handlechange}
                        value={data.montant ?? ''}


                    />
                    <label htmlFor="input-field" className="input-label"></label>
                    <span className="input-highlight"></span>
                </div>
            </div>

            {
                dataLength !== 1 && <div onClick={deleteItem} className=' cursor-pointer mx-4 my-auto h-full flex align-end justify-end'>
                    <X style={{ marginTop: 50 }} color="white" size={30} />
                </div>
            }

        </div >
    )
}

export default memo(RevenusForm)