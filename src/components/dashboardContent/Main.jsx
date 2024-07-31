import { Route, Routes } from "react-router-dom";
import CardsWithUsers from "./CardsWithUsers.jsx";
import Admins from "./user/Admins.jsx";
import Users from "./user/Users.jsx";
import UserQuestionnaires from "./questionnaire/UserQuestionnaires.jsx";
import Questionnaires from "./questionnaire/Questionnaires.jsx";

const Main = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<CardsWithUsers />} />
      <Route path="/:userId/questionnaires" element={<UserQuestionnaires />} />
      <Route
        path="/admins"
        element={
          <main className="flex-1">
            <div className="space-y-2 pt-6">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Admins</h1>
              </div>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <table
                  // eslint-disable-next-line react/prop-types
                  className={`w-full whitespace-no-wrap `}
                >
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                      <th className="px-4 py-3">User Name</th>
                      <th className="px-4 py-3">Role</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Mail</th>
                      <th className="px-4 py-3">Info</th>
                    </tr>
                  </thead>
                  <Admins />
                </table>
              </div>
            </div>
          </main>
        }
      />
      <Route
        path="/users"
        element={
          <main className="flex-1">
            <div className="space-y-2 pt-6">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
              </div>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <table
                  // eslint-disable-next-line react/prop-types
                  className={`w-full whitespace-no-wrap `}
                >
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                      <th className="px-4 py-3">User Name</th>
                      <th className="px-4 py-3">Role</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Mail</th>
                      <th className="px-4 py-3">Info</th>
                    </tr>
                  </thead>
                  <Users />
                </table>
              </div>
            </div>
          </main>
        }
      />
      <Route path="/questionnaires" element={<Questionnaires />} />
    </Routes>
  );
};
export default Main;
