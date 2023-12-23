import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../components/v2/home/Home';
// import QuestionnaireSlider from '../components/Questionnaire/QuestionnaireSlider';

import CBudget from '../components/v2/Cbudget'
import SmPatrimoine from '../components/v2/smPatrimoine'
import Questionnaire from '../components/v2/questionnaire'
import Hero from '../components/v2/hero/Hero';
import Tarifs from '../components/v2/tarifs/Tarifs';
import SmProjet from '../components/v2/smProjet'
const RouterProvider = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route path='/' element={<Hero />} />
                    <Route path='/tarifs' element={<Tarifs />} />
                </Route>
                <Route element={<CBudget />} path='/calculateur_de_budget' />
                <Route element={<SmPatrimoine />} path='/simulateur_de_patrimoine' />
                <Route element={<Questionnaire />} path='/questionnaire' />
                <Route element={<SmProjet />} path="/simulateur_de_projet" />
            </Routes>
        </Router>
    )
}

export default RouterProvider