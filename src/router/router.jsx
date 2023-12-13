import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../components/home/Home';
// import QuestionnaireSlider from '../components/Questionnaire/QuestionnaireSlider';

import Index from '../components/v2'
import CBudget from '../components/v2/Cbudget'
import SmPatrimoine from '../components/v2/smPatrimoine'
import Questionnaire from '../components/v2/questionnaire'
const RouterProvider = () => {
    return (
        <Router>
            <Routes>
                {
                    /* <Route path='/' element={<Home />}>
                        <Route element={<QuestionnaireSlider />} path='/' />
                    </Route> */
                }
                <Route path='/' element={<Index />}>
                    <Route element={<CBudget />} path='/c' />
                    <Route element={<SmPatrimoine />} path='/s' />
                    <Route element={<Questionnaire />} path='/q' />
                </Route>



            </Routes>






        </Router>
    )
}

export default RouterProvider