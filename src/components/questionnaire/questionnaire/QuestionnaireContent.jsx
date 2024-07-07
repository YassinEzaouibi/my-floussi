import {useRef, useState} from "react";
import {idaData as data} from "../../../assets/data/ida-data.js";
import dataUserScore from "../../services/dataUserScore.js";
import statusCalculator from "../../services/statusCalculator.js";
import Prudent from "../../../assets/imgs/vectors/Prudent.svg";
import Modere from "../../../assets/imgs/vectors/Moderate.svg";
import Dynamic from "../../../assets/imgs/vectors/Dynamic.svg";
import Agressif from "../../../assets/imgs/vectors/Aggressive.svg";
import {personalityAnalysis} from "../../../assets/data/personalityAnalysis.js";
import ChartBarCompo from "../charts/ChartBarCompo.jsx";
import ChartLinesCompo from "../charts/ChartLinesCompo.jsx";
import ChartLineCompo from "../charts/ChartLineCompo.jsx";

/**
 * @function QuestionnaireContent
 * @description This is a functional component that renders the questionnaire content.
 * @returns {JSX.Element} The rendered component.
 */
const QuestionnaireContent = () => {
  // State variables
  let [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState({ Prudent: 0, modere: 0, Agressif: 0 });
  const [result, setResult] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);

  const scoreLevel = dataUserScore(score.Prudent, score.modere, score.Agressif);
  const personType = statusCalculator(scoreLevel);
  const options = useRef([]);
  const progress = (index / 32) * 100;

  /**
   * @function checkAns
   * @description This function is called when a user selects an answer. It updates the score based on the selected answer.
   * @param {Event} e - The event object.
   * @param {string} ans - The selected answer.
   */
  const checkAns = (e, ans) => {
    const chosenPoints = question.points[ans];
    setScore((prev) => ({
      Prudent: prev.Prudent + chosenPoints.Prudent,
      modere: prev.modere + chosenPoints.modere,
      Agressif: prev.Agressif + chosenPoints.Agressif,
    }));
    setSelectedChoice(ans);
    setLock(true);
  };

  /**
   * @function next
   * @description This function is called when the user clicks the "Next" button. It moves to the next question if the current question is answered.
   */
  const next = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setSelectedChoice(null);
      setLock(false);
    }
  };

  /**
   * @function previous
   * @description This function is called when the user clicks the "Previous" button. It moves to the previous question.
   */
  const previous = () => {
    if (index > 0) {
      setIndex(--index);
      setQuestion(data[index]);
      setSelectedChoice(null);
      setLock(false);
    }
  };

  /**
   * @function reset
   * @description This function is called when the user clicks the "Repeat" button. It resets the questionnaire.
   */
  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore({ Prudent: 0, modere: 0, Agressif: 0 });
    setLock(false);
    setResult(false);
  };

  /**
   * @function getColorClass
   * @description This function returns the color class based on the person type.
   * @param {string} personType - The type of the person.
   * @returns {string} The color class.
   */

  const colorTextTypePerson = {
    Prudent: "text-green-700",
    Modere: "text-cyan-600",
    Dynamic: "text-cyan-700",
    Agressif: "text-red-700",
  };

  const personTypeImages = {
    Prudent: Prudent,
    Modere: Modere,
    Dynamic: Dynamic,
    Agressif: Agressif,
  };

  return (
    <div className="container mx-auto text-black flex flex-col space-y-4 p-2 mt-6 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 font-poppins text-sm">
      {result ? (
        <></>
      ) : (
        <>
          <h1 className="text-2xl sm:text-3xl text-cyan-600 ">
            {question.group}
          </h1>
          <div className="relative h-3 flex items-center justify-center">
            <div
              className=" absolute top-0 bottom-0 left-0 rounded-full transition-all duration-1000 ease-in-out"
              style={{ width: `${progress}%` }}
            >
              <div className="bg-gradient-to-r from-cyan-500 via-cyan-700 to-cyan-900 h-full rounded-full"></div>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-xl font-semibold mb-2">
              {index + 1}. {question.question}
            </h2>
            {question.field && (
              <li className="text-gray-400 font-semibold">{question.field}</li>
            )}
          </div>

          <ul
            className={`overflow-auto ${
              Object.keys(question.choices).length === 2
                ? "grid grid-cols-1 gap-4"
                : "grid grid-cols-1 sm:grid-cols-2 gap-4"
            }`}
          >
            {Object.keys(question.choices).map((key, idx) => (
              <li
                key={key}
                ref={(ref) => (options.current[key - 1] = ref)}
                onClick={(e) => checkAns(e, key)}
                className={`flex items-center justify-center text-center h-12 sm:h-16 pl-4 sm:pl-6 border border-gray-600 rounded-lg lg:text-base text-sm cursor-pointer hover:bg-gray-200 transition-colors duration-500 ${selectedChoice === key ? "bg-gray-300" : ""} ${
                  Object.keys(question.choices).length % 2 !== 0 &&
                  idx === Object.keys(question.choices).length - 1
                    ? "sm:col-span-2"
                    : ""
                }`}
              >
                {question.choices[key]}
              </li>
            ))}
          </ul>

          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={previous}
              aria-label="Previous Question"
              className="w-full sm:w-1/3  h-12 sm:text-lg  text-sm rounded-lg text-gray-900 bg-white border border-gray-300 hover:bg-gray-100"
            >
              Previous
            </button>
            <button
              onClick={next}
              aria-label="Next Question"
              className="w-full sm:w-1/3  h-12 bg-cyan-600  text-white rounded-lg hover:bg-cyan-800 sm:text-lg  text-sm cursor-pointer transition-colors duration-200"
            >
              Next
            </button>
          </div>
          <div className="mx-auto text-base sm:text-lg font-medium">
            <span className="text-cyan-600">{index + 1}</span> of {data.length}{" "}
            questions
          </div>
        </>
      )}
      {result ? (
        <div className="m-2 bg-gray-50 rounded-lg">
          <div className="mx-auto py-16 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center">
              <div className="flex justify-center">
                <img
                  className="mb-4"
                  src={personTypeImages[personType]}
                  alt="User"
                />
              </div>

              {/* Score details */}
              <div className="lg:pl-8 col-span-2">
                <div className=" text-center ">
                  <p className="text-xl font-medium  text-gray-900">
                    Hikma Invest
                    <br />
                    <i className="text-gray-700">
                      rêves, notre expertise. Investissons ensemble pour un
                      avenir réussi.
                    </i>
                  </p>
                </div>

                <div className="mt-6 text-xl grid grid-cols-2 font-medium text-center place-item-center">
                  <p className="text-gray-800">
                    le score: &nbsp;
                    <i
                      className={`${colorTextTypePerson[personType]} underline underline-offset-2`}
                    >
                      {scoreLevel}
                    </i>
                  </p>
                  <p className="text-gray-800">
                    le Type: &nbsp;
                    <span
                      className={`${colorTextTypePerson[personType]} underline underline-offset-2`}
                    >
                      {personType}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2  p-8 gap-x-4 gap-y-3">
              {/* card 1 */}
              <div className=" rounded-lg block bg-gray-100 text-center text-surface p-2">
                <div className="border-b-2 border-gray-200 px-2 py-2 flex justify-center">
                  <div className="flex justify-center items-center w-16 h-16 bg-red-200 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-9 text-white"
                      viewBox="0 0 384 512"
                    >
                      <path d="M192 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm51.3 182.7L224.2 307l49.7 49.7c9 9 14.1 21.2 14.1 33.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V397.3l-73.9-73.9c-15.8-15.8-22.2-38.6-16.9-60.3l20.4-84c8.3-34.1 42.7-54.9 76.7-46.4c19 4.8 35.6 16.4 46.4 32.7L305.1 208H336V184c0-13.3 10.7-24 24-24s24 10.7 24 24v55.8c0 .1 0 .2 0 .2s0 .2 0 .2V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V272H296.6c-16 0-31-8-39.9-21.4l-13.3-20zM81.1 471.9L117.3 334c3 4.2 6.4 8.2 10.1 11.9l41.9 41.9L142.9 488.1c-4.5 17.1-22 27.3-39.1 22.8s-27.3-22-22.8-39.1zm55.5-346L101.4 266.5c-3 12.1-14.9 19.9-27.2 17.9l-47.9-8c-14-2.3-22.9-16.3-19.2-30L31.9 155c9.5-34.8 41.1-59 77.2-59h4.2c15.6 0 27.1 14.7 23.3 29.8z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight">
                    Tolérance au risque
                  </h5>
                  <p className="mb-4 text-base underline underline-offset-2">
                    {personalityAnalysis[personType].toleranceRisk}
                  </p>
                </div>
              </div>

              {/* card 2 */}
              <div className=" rounded-lg block bg-gray-100 text-center text-surface p-2">
                <div className="border-b-2 border-gray-200 px-2 py-2 flex justify-center">
                  <div className="flex justify-center items-center w-16 h-16 bg-green-200 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-target-arrow w-8 h-9"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      <path d="M12 7a5 5 0 1 0 5 5" />
                      <path d="M13 3.055a9 9 0 1 0 7.941 7.945" />
                      <path d="M15 6v3h3l3 -3h-3v-3z" />
                      <path d="M15 9l-3 3" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight">
                    Objectifs
                  </h5>
                  <p className="mb-4 text-base">
                    {personalityAnalysis[personType].objectives}
                  </p>
                </div>
              </div>

              {/* card 3 */}
              <div className=" rounded-lg block bg-gray-100 text-center text-surface p-2">
                <div className="border-b-2 border-gray-200 px-2 py-2 flex justify-center">
                  <div className="flex justify-center items-center w-16 h-16 bg-blue-200 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-8 h-9"
                    >
                      <path d="M226.6 48H117.3l17.1 12.8c6 4.5 9.6 11.6 9.6 19.2s-3.6 14.7-9.6 19.2l-6.5 4.9c-10 7.5-16 19.3-16 31.9l-.3 91c0 10.2 4.9 19.9 13.2 25.8l1.9 1.3c9.9 7.1 23.3 7 33.2-.1l49.9-36.3c10.7-7.8 25.7-5.4 33.5 5.3s5.4 25.7-5.3 33.5l-49.9 36.3-53.8 39.1c-7.3 5.3-13 12.2-16.9 20.1H66.8c5.3-22.1 17.8-41.9 35.9-56.3c-1.3-.8-2.6-1.7-3.8-2.6L97 291.8c-21-15-33.4-39.2-33.3-65l.3-91c.1-19.8 6.7-38.7 18.6-53.9l-.4-.3C70.7 73 64 59.6 64 45.3C64 20.3 84.3 0 109.3 0H226.6C331.2 0 416 84.8 416 189.4c0 11.1-1 22.2-2.9 33.2L390.1 352H341.3l24.5-137.8c1.5-8.2 2.2-16.5 2.2-24.8C368 111.3 304.7 48 226.6 48zM85.2 432L68.7 464H379.3l-16.6-32H85.2zm315.7-30.7l26.5 51.2c3 5.8 4.6 12.2 4.6 18.7c0 22.5-18.2 40.8-40.8 40.8H56.8C34.2 512 16 493.8 16 471.2c0-6.5 1.6-12.9 4.6-18.7l26.5-51.2C52.5 390.7 63.5 384 75.5 384h297c12 0 22.9 6.7 28.4 17.3zM172 128a20 20 0 1 1 0 40 20 20 0 1 1 0-40z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight">
                    Stratégie d'investissement
                  </h5>
                  <p className="mb-4 text-base">
                    {personalityAnalysis[personType].investmentStrategy}
                  </p>
                </div>
              </div>

              {/* card 4 */}
              <div className=" rounded-lg block bg-gray-100 text-center text-surface p-2">
                <div className="border-b-2 border-gray-200 px-2 py-2 flex justify-center">
                  <div className="flex justify-center items-center w-16 h-16 bg-yellow-200 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="w-8 h-8"
                    >
                      <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight">
                    Horizon d'investissement
                  </h5>
                  <p className="mb-4 text-base">
                    {personalityAnalysis[personType].investmentHorizon}
                  </p>
                </div>
              </div>

              {/* card 5 */}
              <div className=" rounded-lg block bg-gray-100 text-center text-surface p-2">
                <div className="border-b-2 border-gray-200 px-2 py-2 flex justify-center">
                  <div className="flex justify-center items-center w-16 h-16 bg-fuchsia-200 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-user-scan w-8 h-8"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 9a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                      <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                      <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                      <path d="M8 16a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight">
                    Profil
                  </h5>
                  <p className="mb-4 text-base">
                    {personalityAnalysis[personType].profile}
                  </p>
                </div>
              </div>

              {/* card 6*/}
              <div className=" rounded-lg block bg-gray-100 text-center text-surface p-2">
                <div className="border-b-2 border-gray-200 px-2 py-2 flex justify-center">
                  <div className="flex justify-center items-center w-16 h-16 bg-cyan-200 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon
                      icon-tabler icons-tabler-outline icon-tabler-report-analytics w-8 h-8"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                      <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                      <path d="M9 17v-5" />
                      <path d="M12 17v-1" />
                      <path d="M15 17v-3" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight">
                    L'analyse Générale de Hikma Invest
                  </h5>
                  <div className="mt-6 text-xl grid grid-cols-2 font-medium text-center place-item-center">
                    <p className="text-gray-900">
                      score: &nbsp;
                      <i
                        className={`${colorTextTypePerson[personType]} underline underline-offset-2`}
                      >
                        {scoreLevel}
                      </i>
                    </p>
                    <p className="text-gray-900">
                      Type: &nbsp;
                      <span
                        className={`${colorTextTypePerson[personType]} underline underline-offset-2`}
                      >
                        {personType}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <ChartBarCompo situation={personType} />
              <ChartLineCompo situation={personType} />
              <div className="lg:col-span-2">
                <ChartLinesCompo situation={personType} />
              </div>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center">
            <button
              type="button"
              onClick={reset}
              className="flex w-1/2 items-center justify-center rounded-md border border-transparent bg-cyan-600 py-3 px-8 text-base font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-2"
            >
              Répéter
            </button>
          </div>

          <div className="mt-10 border-t border-gray-200 pt-10">
            <h3 className="text-sm font-medium text-gray-900">Investir</h3>
            <p className="mt-4 text-sm text-gray-500">
              Hikma Invest, seule plateforme au Maroc qui crée des placements
              sur-mesure pour chacun de vos projets de vie.{" "}
              <a
                href="#"
                className="font-medium text-cyan-600 hover:text-cyan-600"
              >
                cliquez ici pour investir
              </a>
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default QuestionnaireContent;
