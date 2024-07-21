import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/openAccess/home/Home";
import CBudget from "../components/openAccess/Cbudget/Main.jsx";
import Questionnaire from "../components/openAccess/questionnaire/Index.jsx";
import SmProjet from "../components/openAccess/smProjet/Index.jsx";
import SmPatrimoine from "../components/openAccess/smPatrimoine/Index.jsx";
import Tarifs from "../components/openAccess/tarifs/Tarifs.jsx";
import Login from "../components/openAccess/inscription/login/login.jsx";
import SignUp from "../components/openAccess/inscription/signup/sign-up.jsx";
import Dashboard from "../components/limitedAccess/dashboard.jsx";

const RouterProvider = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Tarifs />} path="/tarifs" />
        <Route element={<CBudget />} path="/budget" />
        <Route element={<SmPatrimoine />} path="/patrimoine" />
        <Route element={<Questionnaire />} path="/questionnaire" />
        <Route element={<SmProjet />} path="/simulateur_de_projet" />
        <Route element={<Login />} path="/login" />
        <Route element={<SignUp />} path="/sign-up" />
        <Route element={<Dashboard />} path="/dashboard" />
      </Routes>
    </Router>
  );
};

export default RouterProvider;
