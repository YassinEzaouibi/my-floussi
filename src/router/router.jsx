import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // import Home from "../components/layout/home/Home";
import { AuthProvider } from "../context/AuthContext.jsx";
import SmProjet from "../components/layout/smProjet/Index.jsx";
import SmPatrimoine from "../components/layout/smPatrimoine/Index.jsx";
import CBudget from "../components/layout/Cbudget/Main.jsx";
import Tarifs from "../components/layout/tarifs/Tarifs.jsx";
import Login from "../inscription/login.jsx";
import SignUp from "../inscription/sign-up.jsx";
import Questionnaire from "../components/layout/questionnaire/Index.jsx";
import Dashboard from "../components/dashboardContent/Dashboard.jsx";
import ProtectedRoute from "./protectedRoute.jsx";
import Home from "../components/layout/home/Home.jsx";
// import GoogleAuth from "../inscription/GoogleAuth.jsx";

const RouterProvider = () => {
  return (
    <AuthProvider>
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
          {/*<Route element={<GoogleAuth />} path="/auth/google/callback" />*/}
          <Route
            path="/*"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default RouterProvider;
