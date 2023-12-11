import React, { useState, useEffect } from 'react'
import { useCallback } from 'react'
import { plusValueNetteCalc } from '../../utils/smPatrimoine/plusValue'
import { autreCalc, autreFisrtCalc, investAutreCalc, investAutreFisrtCalc, pmvAutreCalc, pmvAutreNetteCalc, versAutreCalc, versAutreCumuleCalc } from '../../utils/smPatrimoine/pmvAutre'
import { investBourseCalc, pmvBourseCalc, pmvBourseNetteCalc, repBourseCalc, versBourseCalc, versBourseCumuleCalc } from '../../utils/smPatrimoine/pmvBourse'
import { revenuMensuelCalc, valeurNetteCalc } from '../../utils/smPatrimoine/revenueNette'
import PatrimoineCharte from './AreaChart'
import AreaChartColorIndicators from './AreaChartColorIndicators'
import AreaChartYearsIndicator from './AreaChartYearsIndicator'
import Input from './Input'
import Results from './Results'
import Section1 from './Section1'
import Section3 from './Section3'
import Slider from './Slider'

const SimulateurPatrimoine = () => {
    const currentDate = new Date();



    const [repInv, setRepInv] = useState(50)
    const [repPI, setRepPI] = useState(50)
    const [pActuel, setPActuel] = useState(100000)
    const [invAnnuel, setInvAnnuel] = useState(6000)
    const [nbrAnnesEpargne, setNbrAnnesEpargne] = useState(20)
    const [rendBourse, setRendBourse] = useState(8)
    const [rendAutre, setRendAutre] = useState(5)
    const [txImpositionBourse, setTxImpositionBourse] = useState(17.20)
    const [txImpositionAutre, setTxImpositionAutre] = useState(30)
    const [txRetrait, setTxRetrait] = useState(4)
    const [txInflation, setTxInflastion] = useState(3)

    const [revenuParMois, setRevenuParMois] = useState(0)
    const [valeurNette, setValeurNette] = useState(0)
    const [plusValueNette, setPlusValueNette] = useState(0)
    const [versementCumule, setVersementCumule] = useState(0)


    const [data, setData] = useState([])

    useEffect(() => {
        const arr = []
        const repBourseFisrt = repBourseCalc(repPI, pActuel, 0, 0, 0, true)
        const autreFisrt = autreFisrtCalc(pActuel, repBourseFisrt)
        let versAutreFisrt = 0
        let versBourse = 0
        let versAutre = 0
        let versementCumule = 0
        let investAutre = 0
        let autre = autreFisrtCalc(pActuel, repBourseFisrt)
        let versAutreCumule = 0

        let pmvAutre = 0


        let repBourse = repBourseCalc(repPI, pActuel, repBourseCalc, rendAutre, txImpositionAutre, true)
        let investBourse = 0
        let versBourseCumule = 0
        let pmvBourse = 0



        for (let i = 0; i <= nbrAnnesEpargne; i++) {


            if (i !== 0) {


                versementCumule += invAnnuel

                versBourse = versBourseCalc(invAnnuel, repInv)
                versAutre = versAutreCalc(invAnnuel, versBourse)

                investAutre = i === 1 ? investAutreFisrtCalc(versAutre)
                    :
                    investAutreCalc(investAutre, rendAutre, txInflation, repPI, invAnnuel)

                autre = autreCalc(autre, rendAutre, txInflation)
                versAutreCumule = versAutreCumuleCalc(versAutre, versAutreCumule)


                pmvAutre = pmvAutreCalc(autreFisrt, autre, versAutreCumule, investAutre)

                repBourse = repBourseCalc(repPI, pActuel, repBourse, rendBourse, txInflation)
                investBourse = i === 1 ? versBourse : investBourseCalc(versBourse, invAnnuel, repPI, investBourse, rendBourse, txInflation)
                versBourseCumule = versBourseCumuleCalc(versBourse, versBourseCumule)

                pmvBourse = pmvBourseCalc(repBourseFisrt, repBourse, investBourse, versBourseCumule)


            }



            arr.push({
                year: currentDate.getFullYear() + i,
                'Invetissements': pActuel,
                'Versement cumulé': parseInt(versementCumule),
                'Pmv Autre': parseInt(pmvAutre),
                'Pmv Bourse': parseInt(pmvBourse)

            })

        }




        setData([...arr])
        const pmvBourseNette = pmvBourseNetteCalc(pmvBourse, txImpositionBourse)
        const pmvAutreNette = pmvAutreNetteCalc(pmvAutre, txImpositionAutre)


        const valeurNette = valeurNetteCalc(pActuel, versementCumule, pmvBourseNette, pmvAutreNette)

        const revenuMensuel = revenuMensuelCalc(txRetrait, valeurNette)

        setRevenuParMois(parseInt(revenuMensuel))

        setValeurNette(parseInt(valeurNette))

        const plusValueNette = plusValueNetteCalc(pmvBourseNette, pmvAutreNette)
        setPlusValueNette(parseInt(plusValueNette))

        setVersementCumule(parseInt(versementCumule))



        // console.log(data)








    }, [repInv, repPI, pActuel, invAnnuel, nbrAnnesEpargne, rendBourse, rendAutre, txImpositionBourse, txImpositionAutre, txRetrait, txInflation,])



    const handleRepInv = useCallback((e, v) => {


        setRepInv(v)
    }, [repInv])
    const handleRepPI = useCallback((e, v) => {
        setRepPI(v)

    }, [repPI])

    const handlePActuel = useCallback((e) => {

        if (e.target.value.match(/^\d*\.?\d{0,2}$/)) {
            setPActuel(+e.target.value)
        }
    }, [pActuel])
    const handleInvAnnuel = useCallback((e) => {

        if (e.target.value.match(/^\d*\.?\d{0,2}$/)) {
            setInvAnnuel(+e.target.value)
        }
    }, [invAnnuel])

    const handleNbrAnnesEpargne = useCallback((e) => {

        if (e.target.value.match(/^\d*\.?\d{0,2}$/)) {
            setNbrAnnesEpargne(+e.target.value)
        }
    }, [nbrAnnesEpargne])

    const handleRendBourse = useCallback((e) => {

        if (e.target.value.match(/^\d*\.?\d{0,2}$/)) {
            setRendBourse(+e.target.value)
        }
    }, [rendBourse])

    const handleRendAutre = useCallback((e) => {

        if (e.target.value.match(/^\d*\.?\d{0,2}$/)) {
            setRendAutre(+e.target.value)
        }
    }, [rendAutre])
    const handleTxImpositionBourse = useCallback((e) => {

        if (e.target.value.match(/^\d*\.?\d{0,2}$/)) {
            setTxImpositionBourse(+e.target.value)
        }
    }, [txImpositionBourse])
    const handleTxImpositionAutre = useCallback((e) => {

        if (e.target.value.match(/^\d*\.?\d{0,2}$/)) {
            setTxImpositionAutre(+e.target.value)
        }
    }, [txImpositionAutre])

    const handleTxRetrait = useCallback((e) => {

        if (e.target.value.match(/^\d*\.?\d{0,2}$/)) {
            setTxRetrait(+e.target.value)
        }
    }, [txRetrait])
    const handleTxInflation = useCallback((e) => {

        if (e.target.value.match(/^\d*\.?\d{0,2}$/)) {
            setTxInflastion(+e.target.value)
        }
    }, [txInflation])



    return (
        <div className=' min-h-[100vh] h-fit w-full  flex gap-3 scale-x-90 '>

            <div className=' border  border-white min-h-full w-full flex flex-col p-5 items-center gap-5'>
                {/* paatrimoineActuel  mad */}
                <Input title={'Patrimoine actuel'} v={pActuel} onChange={handlePActuel} />

                {/* Répartition de votre patrimoine initial  %*/}
                <Slider v={repPI}
                    onChange={handleRepPI}
                    title={"Répartition de votre patrimoine initial"} t1="Bourse"
                    t2="Autre" />

                {/* Investissements annuels mad */}
                <Input title={'Investissements annuels'} v={invAnnuel} onChange={handleInvAnnuel} />

                {/* Répartition des investissements % */}
                <Slider v={repInv} title={" Répartition des investissements"} t1="Bourse" t2="Autre"
                    onChange={handleRepInv}
                />

                {/* Nombre d’années d’épargne ans */}
                <Input title={"Nombre d'années d'épargne"} v={nbrAnnesEpargne} onChange={handleNbrAnnesEpargne} />


                {/* Rendement autre % */}
                <Input title={'Rendement bourse'} v={rendBourse} onChange={handleRendBourse} />

                {/* Rendement autre % */}
                <Input title={'Rendement autre'} v={rendAutre} onChange={handleRendAutre} />

                {/* Taux d’imposition bourse % */}
                <Input title={"Taux d'imposition bourse"} v={txImpositionBourse} onChange={handleTxImpositionBourse} />

                {/* Taux d’imposition autre % */}
                <Input title={"Taux d'imposition autre"} v={txImpositionAutre} onChange={handleTxImpositionAutre} />

                {/* Taux de retrait % */}
                <Input title={'Taux de retrait'} v={txRetrait} onChange={handleTxRetrait} />

                {/* Taux d’inflation % */}
                <Input title={"Taux d'inflation"} v={txInflation} onChange={handleTxInflation} />
            </div>


            <div className=' border  border-white min-h-full w-full flex flex-col items-center p-5'>
                <Section1 years={nbrAnnesEpargne} revenuParMois={revenuParMois} capitalFinal={valeurNette} />
                <PatrimoineCharte data={data} />
                <AreaChartYearsIndicator years={nbrAnnesEpargne} />
                <AreaChartColorIndicators />

                <Section3 versementsCumule={versementCumule} plusValueNette={plusValueNette} years={nbrAnnesEpargne} />

                <Results />
            </div>


        </div>
    )
}

export default SimulateurPatrimoine