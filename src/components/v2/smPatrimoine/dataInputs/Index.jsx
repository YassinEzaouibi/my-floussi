import React, { useCallback } from 'react'
import Input from './Input'
import Slider from './Slider'
import { setRepInv, setRepPI, setInvAnnuel, setNbrAnnesEpargne, setPActuel, setPlusValueNette, setRendAutre, setRendBourse, setTxImpositionAutre, setTxImpositionBourse, setTxInflation, setTxRetrait, } from '../../../../redux/smPatrimoineSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Index = () => {
    const { repInv, repPI, pActuel, invAnnuel,
        nbrAnnesEpargne, rendBourse, rendAutre,
        txImpositionAutre, txImpositionBourse,
        txRetrait, txInflation,

    } = useSelector(state => state.smPatrioine)

    const dispatch = useDispatch()


    const handleRepInv = useCallback((e, v) => {

        dispatch(setRepInv(v))

    }, [repInv])
    const handleRepPI = useCallback((e, v) => {
        dispatch(setRepPI(v))

    }, [repPI])

    const handlePActuel = useCallback((e) => {

        dispatch(setPActuel(e.target.value))

    }, [pActuel])

    const handleInvAnnuel = useCallback((e) => {

        dispatch(setInvAnnuel(e.target.value))

    }, [invAnnuel])

    const handleNbrAnnesEpargne = useCallback((e) => {


        dispatch(setNbrAnnesEpargne(e.target.value))
    }, [nbrAnnesEpargne])

    const handleRendBourse = useCallback((e) => {

        dispatch(setRendBourse(e.target.value))

    }, [rendBourse])

    const handleRendAutre = useCallback((e) => {

        dispatch(setRendAutre(e.target.value))

    }, [rendAutre])
    const handleTxImpositionBourse = useCallback((e) => {

        dispatch(setTxImpositionBourse(e.target.value))

    }, [txImpositionBourse])
    const handleTxImpositionAutre = useCallback((e) => {

        dispatch(setTxImpositionAutre(e.target.value))

    }, [txImpositionAutre])

    const handleTxRetrait = useCallback((e) => {

        dispatch(setTxRetrait(e.target.value))

    }, [txRetrait])
    const handleTxInflation = useCallback((e) => {

        dispatch(setTxInflation(e.target.value))

    }, [txInflation])


    return (
        <div className=' w-[40%]  h-full px-4 border-r border-r-grayLight'>
            {/* paatrimoineActuel  mad */}
            <Input title={'Patrimoine actuel'}
                v={pActuel}
                onChange={handlePActuel}
                mad
            />

            {/* Répartition de votre patrimoine initial  %*/}
            <Slider
                v={repPI}

                onChange={handleRepPI}
                title={"Répartition de votre patrimoine initial"} t1="Bourse"
                t2="Autre" />

            {/* Investissements annuels mad */}
            <Input title={'Investissements annuels'}
                v={invAnnuel}
                onChange={handleInvAnnuel}
                mad
            />

            {/* Répartition des investissements % */}
            <Slider
                v={repInv}
                title={" Répartition des investissements"}
                t1="Bourse"
                t2="Autre"

                onChange={handleRepInv}
            />

            {/* Nombre d’années d’épargne ans */}
            <Input title={"Nombre d'années d'épargne"}
                v={nbrAnnesEpargne}
                onChange={handleNbrAnnesEpargne}
            />


            {/* Rendement autre % */}
            <Input title={'Rendement bourse'}
                v={rendBourse}
                onChange={handleRendBourse}
            />

            {/* Rendement autre % */}
            <Input title={'Rendement autre'}
                v={rendAutre}
                onChange={handleRendAutre}
            />

            {/* Taux d’imposition bourse % */}
            <Input title={"Taux d'imposition bourse"}
                v={txImpositionBourse}
                onChange={handleTxImpositionBourse}
            />

            {/* Taux d’imposition autre % */}
            <Input title={"Taux d'imposition autre"}
                v={txImpositionAutre}
                onChange={handleTxImpositionAutre}
            />

            {/* Taux de retrait % */}
            <Input title={'Taux de retrait'}
                v={txRetrait}
                onChange={handleTxRetrait}
            />

            {/* Taux d’inflation % */}
            <Input title={"Taux d'inflation"}
                v={txInflation}
                onChange={handleTxInflation}
            />
        </div>
    )
}

export default Index