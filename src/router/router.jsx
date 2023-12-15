import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../components/v2/home/Home';
// import QuestionnaireSlider from '../components/Questionnaire/QuestionnaireSlider';

import Index from '../components/v2'
import CBudget from '../components/v2/Cbudget'
import SmPatrimoine from '../components/v2/smPatrimoine'
import Questionnaire from '../components/v2/questionnaire'
const RouterProvider = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route element={<CBudget />} path='/calculateur_de_budget' />
                <Route element={<SmPatrimoine />} path='/simulateur_de_patrimoine' />
                <Route element={<Questionnaire />} path='/questionnaire' />
            </Routes>
        </Router>
    )
}

export default RouterProvider