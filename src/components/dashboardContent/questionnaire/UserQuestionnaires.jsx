import { useAuth } from "../../../context/AuthContext.jsx";
import { useEffect, useState } from "react";
import { fetchAllQuestionnairesByIdUser } from "../../../services/questionnaireService.js";
import userLogo from "../../../assets/imgs/icons8-user.svg";

const UserQuestionnaires = () => {
  const { token, user } = useAuth();

  const [questionnaires, setQuestionnaires] = useState(0);
  useEffect(() => {
    const getQuestionnairesByUserId = async () => {
      try {
        const questionnaires = await fetchAllQuestionnairesByIdUser(
          token,
          user.id,
        );
        setQuestionnaires(questionnaires);
      } catch (error) {
        console.error("Error fetching questionnaires:", error);
      }
    };
    getQuestionnairesByUserId();
  }, [token, user.id]);

  return (
    <main className="flex-1">
      <div className="space-y-2 pt-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Questionnaires
          </h1>
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
                <th className="px-4 py-3">Questionnaire id</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Score</th>
                <th className="px-4 py-3">Info</th>
              </tr>
            </thead>
            <tbody className="bg-white  w-full dark:divide-gray-700 dark:bg-gray-800">
              {Array.isArray(questionnaires) ? (
                // eslint-disable-next-line react/prop-types
                questionnaires.map((questionnaire) => (
                  <tr
                    className="text-gray-700 dark:text-gray-400"
                    key={questionnaire.id}
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm">
                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src={userLogo}
                            alt=""
                            loading="lazy"
                          />
                          <div
                            className="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{user.name}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            Function
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">{user.role}</td>
                    <td className="px-4 py-3 text-sm">{questionnaire._id}</td>
                    <td className="px-4 py-3 text-sm">{questionnaire.type}</td>
                    <td className="px-4 py-3 text-sm">{questionnaire.score}</td>
                    <td className="px-4 py-3 text-xs">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                        more
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <p>No questionnaires found</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};
export default UserQuestionnaires;
