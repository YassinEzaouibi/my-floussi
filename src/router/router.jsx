import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalculateurBudget from '../components/calcluateurBudjet/';
import Home from '../components/home/Home';
import QuestionnaireSlider from '../components/Questionnaire/QuestionnaireSlider';
import SimulateurPatrimoine from '../components/simulateurPatrimoine/Index';
const RouterProvider = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route element={<QuestionnaireSlider />} path='/' />
                    <Route element={<CalculateurBudget />} path='/c' />
                    <Route element={<SimulateurPatrimoine />} path='/s' />
                </Route>

            </Routes>
        </Router>
    )
}

export default RouterProvider