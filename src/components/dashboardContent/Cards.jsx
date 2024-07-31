import { useAuth } from "../../context/AuthContext.jsx";
import { useEffect, useState } from "react";
import {
  fetchAllUsers,
  fetchAllUsersByRoleAdmin,
  fetchAllUsersByRoleUser,
} from "../../services/userService.js";
import { fetchAllQuestionnaires } from "../../services/questionnaireService.js";

const Cards = () => {
  const { token } = useAuth();
  const [userCount, setUserCount] = useState(0);
  const [userAdminCount, setUserAdminCount] = useState(0);
  const [userClientCount, setUserClientCount] = useState(0);
  const [questionnaireCount, setQuestionnaireCount] = useState(0);

  useEffect(() => {
    const getQuestionsCount = async () => {
      try {
        const questionnaires = await fetchAllQuestionnaires(token);
        console.log(token);
        setQuestionnaireCount(questionnaires.length);
      } catch (error) {
        console.error("Error in counting questionnaire:", error);
      }
    };

    getQuestionsCount();
  }, [token]);

  useEffect(() => {
    const getUsersClientCount = async () => {
      try {
        const clients = await fetchAllUsersByRoleUser(token);
        setUserClientCount(clients.length);
      } catch (error) {
        console.error("Error in counting clients:", error);
      }
    };

    getUsersClientCount();
  }, [token]);

  useEffect(() => {
    const getUsersAdminCount = async () => {
      try {
        const admins = await fetchAllUsersByRoleAdmin(token);
        setUserAdminCount(admins.length);
      } catch (error) {
        console.error("Error in counting admins:", error);
      }
    };

    getUsersAdminCount();
  }, [token]);

  useEffect(() => {
    const getUsersCount = async () => {
      try {
        const users = await fetchAllUsers(token);
        setUserCount(users.length);
      } catch (error) {
        console.error("Error in counting users:", error);
      }
    };
    getUsersCount();
  }, [token]);

  return (
    <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
      {/* Card 1*/}
      <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow-xs dark:bg-gray-800">
        <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Total Users
          </p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {userCount}
          </p>
        </div>
      </div>
      {/* Card 2*/}
      <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow-xs dark:bg-gray-800">
        <div className="p-3 mr-4 text-cyan-400 bg-cyan-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Admins
          </p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {userAdminCount}
          </p>
        </div>
      </div>
      {/* Card 3*/}
      <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow-xs dark:bg-gray-800">
        <div className="p-3 mr-4 text-yellow-300 bg-yellow-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Clients
          </p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {userClientCount}
          </p>
        </div>
      </div>
      {/* Card 4*/}
      <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow-xs dark:bg-gray-800">
        <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
            />
          </svg>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Total Questionnaires
          </p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {questionnaireCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
