import React, { useCallback } from "react";
import Slider from "./Slider";
import {
  setInvAnnuel,
  setNbrAnnesEpargne,
  setPActuel,
  setRendAutre,
  setRendBourse,
  setRepInv,
  setRepPI,
  setTxImpositionAutre,
  setTxImpositionBourse,
  setTxInflation,
  setTxRetrait,
} from "../../../redux/smPatrimoineSlice";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const {
    repInv,
    repPI,
    pActuel,
    invAnnuel,
    nbrAnnesEpargne,
    rendBourse,
    rendAutre,
    txImpositionAutre,
    txImpositionBourse,
    txRetrait,
    txInflation,
  } = useSelector((state) => state.smPatrioine);

  const dispatch = useDispatch();

  const handleRepInv = useCallback(
    (e, v) => {
      dispatch(setRepInv(v));
    },
    [repInv],
  );
  const handleRepPI = useCallback(
    (e, v) => {
      dispatch(setRepPI(v));
    },
    [repPI],
  );

  const handlePActuel = useCallback(
    (e, v) => {
      dispatch(setPActuel(v));
    },
    [pActuel],
  );

  const handleInvAnnuel = useCallback(
    (e, v) => {
      dispatch(setInvAnnuel(v));
    },
    [invAnnuel],
  );

  const handleNbrAnnesEpargne = useCallback(
    (e, v) => {
      dispatch(setNbrAnnesEpargne(v));
    },
    [nbrAnnesEpargne],
  );

  const handleRendBourse = useCallback(
    (e, v) => {
      dispatch(setRendBourse(v));
    },
    [rendBourse],
  );

  const handleRendAutre = useCallback(
    (e, v) => {
      dispatch(setRendAutre(v));
    },
    [rendAutre],
  );
  const handleTxImpositionBourse = useCallback(
    (e, v) => {
      dispatch(setTxImpositionBourse(v));
    },
    [txImpositionBourse],
  );
  const handleTxImpositionAutre = useCallback(
    (e, v) => {
      dispatch(setTxImpositionAutre(v));
    },
    [txImpositionAutre],
  );

  const handleTxRetrait = useCallback(
    (e, v) => {
      dispatch(setTxRetrait(v));
    },
    [txRetrait],
  );
  const handleTxInflation = useCallback(
    (e, v) => {
      dispatch(setTxInflation(v));
    },
    [txInflation],
  );

  return (
    <div className=" w-[40%] max-[640px]:w-full  h-full px-4 border-r border-r-grayLight">
      {/* paatrimoineActuel  mad */}
      <Slider
        setV={setPActuel}
        unit={"MAD"}
        montant
        step={1000}
        min={0}
        max={10000000}
        title={"Patrimoine actuel"}
        v={pActuel}
        onChange={handlePActuel}
        mad
      />

      {/* Répartition de votre patrimoine initial  %*/}
      <Slider
        setV={setRepPI}
        v={repPI}
        onChange={handleRepPI}
        title={"Répartition de votre patrimoine initial"}
        t1="Bourse"
        t2="Autre"
      />

      {/* Investissements annuels mad */}
      <Slider
        setV={setInvAnnuel}
        unit={"MAD"}
        montant
        min={0}
        max={200000}
        step={2000}
        title={"Investissements annuels"}
        v={invAnnuel}
        onChange={handleInvAnnuel}
        mad
      />

      {/* Répartition des investissements % */}
      <Slider
        setV={setRepInv}
        v={repInv}
        title={" Répartition des investissements"}
        t1="Bourse"
        t2="Autre"
        onChange={handleRepInv}
      />

      {/* Nombre d’années d’épargne ans */}
      <Slider
        setV={setNbrAnnesEpargne}
        unit={"ANS"}
        montant
        min={0}
        max={50}
        title={"Nombre d'années d'épargne"}
        v={nbrAnnesEpargne}
        onChange={handleNbrAnnesEpargne}
      />

      {/* Rendement bourse % */}
      <Slider
        setV={setRendBourse}
        min={0}
        max={25}
        title={"Rendement bourse"}
        v={rendBourse}
        onChange={handleRendBourse}
      />

      {/* Rendement autre % */}
      <Slider
        setV={setRendAutre}
        min={0}
        max={10}
        title={"Rendement autre"}
        v={rendAutre}
        onChange={handleRendAutre}
      />

      {/* Taux d’imposition bourse % */}
      <Slider
        setV={setTxImpositionBourse}
        min={0}
        max={40}
        title={"Taux d'imposition bourse"}
        v={txImpositionBourse}
        onChange={handleTxImpositionBourse}
      />

      {/* Taux d’imposition autre % */}
      <Slider
        setV={setTxImpositionAutre}
        min={0}
        max={40}
        title={"Taux d'imposition autre"}
        v={txImpositionAutre}
        onChange={handleTxImpositionAutre}
      />

      {/* Taux de retrait % */}
      <Slider
        setV={setTxRetrait}
        min={0}
        max={25}
        title={"Taux de retrait"}
        v={txRetrait}
        onChange={handleTxRetrait}
      />

      {/* Taux d’inflation % */}
      <Slider
        setV={setTxInflation}
        min={0}
        max={10}
        title={"Taux d'inflation"}
        v={txInflation}
        onChange={handleTxInflation}
      />
    </div>
  );
};

export default Index;
