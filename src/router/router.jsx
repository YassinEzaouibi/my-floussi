import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import CBudget from "../components/Cbudget/Index.jsx";
import Questionnaire from "../components/questionnaire/Index.jsx";
import SmProjet from "../components/smProjet/Index.jsx";
import SmPatrimoine from "../components/smPatrimoine/Index.jsx";
import Tarifs from "../components/tarifs/Tarifs.jsx";

const RouterProvider = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          {/*<Route path="/" element={<Hero />} />*/}
        </Route>
        <Route element={<Tarifs />} path="/tarifs" />
        <Route element={<CBudget />} path="/budget" />
        <Route element={<SmPatrimoine />} path="/patrimoine" />
        <Route element={<Questionnaire />} path="/questionnaire" />
        <Route element={<SmProjet />} path="/simulateur_de_projet" />
      </Routes>
    </Router>
  );
};

export default RouterProvider;
