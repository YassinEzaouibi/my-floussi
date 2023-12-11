import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { getTotalOfArrayObject } from '../../../utils/sankeyData/getTotalOfData'
import { getTotalOfCategory, rest, tauxEpargne, tauxEpargnePossible } from '../../../utils/sankeyData/sankeyCalucaltors'
import { step1, step2, step3 } from '../../../utils/sankeyData/steps'
import SankeyDiagramme from './diagramme/Sankey'
import Header from './Header'
import TopSection from './TopSection'

const Index = () => {
    const sankeyRef = useRef(null)


    const { investissements, revenus, depences } = useSelector(state => state.calculateurBudjet)

    const data = [
        ["Budget", "Investissements", "Dépenses"],
        ...step1(revenus, investissements, depences),
        ...step2({ investissements, depences }),
        ...step3({ investissements, depences })
    ]


    const totalRev = getTotalOfArrayObject(revenus)
    const totalInv = getTotalOfCategory(investissements)
    const totalDep = getTotalOfCategory(depences)
    const atLeastOneItemIsFilled = (totalRev > 0) || (totalInv > 0) || (totalDep > 0)


    return (
        <div className=' h-fit w-full'>
            <div className=' h-fit pb-7 w-full '>

                <TopSection sankeyRef={sankeyRef} />



                <div className=' w-[100%] my-10 mx-auto '>
                    <p className=' text-black text-center text-lg'>
                        {
                            `
                                Votre taux d'épargne est de ${tauxEpargne(revenus, investissements)} (taux d'épargne possible: ${tauxEpargnePossible(revenus, depences)} ). Vous avez un revenu total de ${totalRev} MAD, des dépenses de ${totalDep} MAD et investissez ${totalInv} MAD tous les mois, ${rest(totalRev, totalInv, totalDep)}.
                            `
                        }
                    </p>
                </div>

                {atLeastOneItemIsFilled
                    &&
                    <div className=' w-[100%] h-full my-4 mx-auto p-10' ref={sankeyRef}>
                        <SankeyDiagramme data={data} />
                    </div>
                }



            </div>
        </div>
    )
}

export default Index