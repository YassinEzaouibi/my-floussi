import React from 'react'
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import CalculateurBudget from '../components/calcluateurBudjet/CalculateurBudget';
import Home from '../components/home/Home';
import QuestionnaireSlider from '../components/Questionnaire/QuestionnaireSlider';
const RouterProvider = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route element={<QuestionnaireSlider />} path='/' />
                    <Route element={<CalculateurBudget />} path='/c' />
                </Route>

            </Routes>
        </Router>
    )
}

export default RouterProvider