import React, { useRef } from 'react'
import CbTab from './CbTabs/CbTab';
import { useDispatch, useSelector } from 'react-redux';
import { addDepencesGroup, addGroup, editInvistissmentElementData, setDepences, setInvestissements } from '../../redux/calculateurBudjetSlice';
import SankeyDiagramme from './chart/SankeyDiagramme';
import { step1, step2, step3, _revenus } from '../../utils/sankeyData/steps';
import { getTotalOfCategory, rest, tauxEpargne, tauxEpargnePossible, } from '../../utils/sankeyData/sankeyCalucaltors';
import { getTotalOfArrayObject } from '../../utils/sankeyData/getTotalOfData';

import StyledTabs from './CbTabs/StyledTabs';
import StyledTab from './CbTabs/StyledTab';
import a11yProps from '../../utils/styledTabs/a11yProps';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { reOrder } from '../../utils/reorder';





const CalculateurBudget = () => {
    const sankeyRef = useRef(null)
    const dispatch = useDispatch()

    const revenus = useSelector(state => state.calculateurBudjet.revenus)
    const investissements = useSelector(state => state.calculateurBudjet.investissements)
    const depences = useSelector(state => state.calculateurBudjet.depences)
    const data = [
        ["Budget", "Investissements", "Dépenses"],
        ...step1(revenus, investissements, depences),
        ...step2({ investissements, depences }),
        ...step3({ investissements, depences })
    ]


    const [value, setValue] = React.useState(0);
    const totalRev = getTotalOfArrayObject(revenus)
    const totalInv = getTotalOfCategory(investissements)
    const totalDep = getTotalOfCategory(depences)

    const atLeastOneItemIsFilled = (totalRev > 0) || (totalInv > 0) || (totalDep > 0)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const ajouterCategorie = (type) => {
        switch (type) {
            case 'investissements':
                dispatch(addGroup())
                break;

            case 'depences':

                dispatch(addDepencesGroup())

            default:
                break;
        }
    }




    const handleDragEnd = (results) => {
        const { source, destination, type, draggableId } = results
        if (!destination) return
        if (source.droppableId === destination.droppableId && source.index === destination.index) return

        const srcIndex = source.index
        const destIndex = destination.index

        const srcId = source.droppableId
        const destId = destination.droppableId

        if (type === 'investissement' || type === 'depences') {
            switch (type) {
                case 'investissement':
                    const newInvs = reOrder(investissements, srcIndex, destIndex)
                    dispatch(setInvestissements(newInvs))
                    break;
                case 'depences':
                    const nesDeps = reOrder(depences, srcIndex, destIndex)
                    dispatch(setDepences(nesDeps))
                    break
                default:
                    break;
            }
            return
        }


        const groupSrcIndex = investissements.findIndex(inv => inv.id == srcId)
        const groupDestIndex = investissements.findIndex(inv => inv.id === destId)

        const srcItems = [...investissements[groupSrcIndex].data]
        const destItems = srcId === destId ? srcItems : [...investissements[groupDestIndex].data]
        const draggableItemIndex = srcItems.findIndex(d => d.id === draggableId)
        const item = srcItems[draggableItemIndex]

        srcItems.splice(srcIndex, 1)
        destItems.splice(destIndex, 0, item)

        dispatch(editInvistissmentElementData({ groupIndex: groupSrcIndex, data: srcItems }))
        dispatch(editInvistissmentElementData({ groupIndex: groupDestIndex, data: destItems }))



    }

    return (
        <>
            <div className='w-full h-fit '>
                {/* <h1 className='text-center text-forth font-bold text-2xl mb-20'>Calculateur de budget</h1> */}
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="styled tabs example"
                >
                    <StyledTab label="Revenus" {...a11yProps(0)} />

                    <StyledTab label="Investissements" {...a11yProps(1)} />

                    <StyledTab label="Dépenses" {...a11yProps(2)} />

                </StyledTabs>




                <DragDropContext onDragEnd={handleDragEnd}>
                    {value === 0 && <CbTab type='revenus' data={revenus} />}
                    {/* {value === 1 && <CbTab type='invistissements' data={inverstissements} />} */}
                    {value === 1
                        &&
                        <Droppable droppableId={'ROOT_invs'} type='investissement'>
                            {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef}
                                >
                                    {investissements.map((inv, i) => (
                                        <Draggable draggableId={inv.id} key={inv.id} index={i}>
                                            {
                                                (provided) => (
                                                    <div className=''
                                                        {...provided.dragHandleProps}
                                                        {...provided.draggableProps}
                                                        ref={provided.innerRef}
                                                    >
                                                        <CbTab

                                                            type='investissements' data={inv} dataLength={investissements.length} />
                                                        {provided.placeholder}
                                                    </div>
                                                )
                                            }
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>}


                    {value === 2 && <Droppable droppableId={'ROOT_deps'} type='depences'>
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {depences.map((dep, i) => (
                                    <Draggable draggableId={dep.id} key={dep.id} index={i}>
                                        {
                                            (provided) => (
                                                <div
                                                    {...provided.dragHandleProps}
                                                    {...provided.draggableProps}
                                                    ref={provided.innerRef}
                                                >
                                                    <CbTab
                                                        type='depences' data={dep} dataLength={depences.length} />
                                                    {provided.placeholder}
                                                </div>
                                            )
                                        }
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>}
                </DragDropContext>

                {
                    value !== 0 && <div className='w-[100%] h-fit flex justify-center   mx-auto'>
                        <button
                            onClick={() => {
                                const type = value === 1 ? 'investissements' : 'depences'
                                ajouterCategorie(type)
                            }}


                            className='text-forth text-2xl font-bold 	
                    opacity-60
                     w-50 h-30 px-4 py-2 mr-5 rounded-xl hover:opacity-80
                     transition duration-150 ease-in-out'>Ajouter une catégorie +</button>
                    </div>
                }
                <div className='w-[60%] h-fit flex justify-end   mx-auto'>
                    <button

                        onClick={() => {

                            value < 2 ? setValue(value + 1) : sankeyRef.current.scrollIntoView({ behavior: 'smooth' });
                        }}

                        className='text-forth text-2xl font-bold bg-gold-500 from-white	
                     w-50 h-30 px-4 py-2 mr-5 rounded-xl hover:bg-gold-400 transition duration-150 ease-in-out'>Suivant</button>
                </div>


            </div>

            <div className=' w-[90%] my-10 mx-auto '>
                <p className=' text-white text-center text-xl'>
                    {
                        `
                        Votre taux d'épargne est de ${tauxEpargne(revenus, investissements)} (taux d'épargne possible: ${tauxEpargnePossible(revenus, depences)} ). Vous avez un revenu total de ${totalRev} M A D, des dépenses de ${totalDep} M A D et investissez ${totalInv} M A D tous les mois, ${rest(totalRev, totalInv, totalDep)}.
                        `
                    }
                </p>
            </div>
            {atLeastOneItemIsFilled && <div className='w-full h-fit mt-10  ' id='sankey' ref={sankeyRef}>
                <div className=' w-[90%] h-full my-4 mx-auto p-10    '>
                    <SankeyDiagramme data={data} />
                    {/* <SankeyRecharts /> */}
                </div>
            </div >}
        </>
    )
}

export default CalculateurBudget


