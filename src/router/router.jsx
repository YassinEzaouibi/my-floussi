import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalculateurBudget from '../components/calcluateurBudjet/';
import Home from '../components/home/Home';
import QuestionnaireSlider from '../components/Questionnaire/QuestionnaireSlider';
import SimulateurPatrimoine from '../components/simulateurPatrimoine/Index';
import Index from '../components/v2'
import CBudget from '../components/v2/Cbudget'
import SmPatrimoine from '../components/v2/smPatrimoine'
const RouterProvider = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path='/' element={<Home />}>
                    <Route element={<QuestionnaireSlider />} path='/' />
                    <Route element={<CalculateurBudget />} path='/c' />
                    <Route element={<SimulateurPatrimoine />} path='/s' />

                </Route> */}
                <Route path='/' element={<Index />}>
                    <Route element={<CBudget />} path='/c' />
                    <Route element={<SmPatrimoine />} path='/s' />
                </Route>



            </Routes>






        </Router>
    )
}

export default RouterProvider