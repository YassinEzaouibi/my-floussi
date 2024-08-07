import {useRef, useState} from "react";
import {idaData as data} from "../../../../assets/data/ida-data.js";
import dataUserScore from "../../../../services/dataUserScore.js";
import statusCalculator from "../../../../services/statusCalculator.js";
import Prudent from "../../../../assets/imgs/vectors/Prudent.svg";
import Modere from "../../../../assets/imgs/vectors/Moderate.svg";
import Dynamic from "../../../../assets/imgs/vectors/Dynamic.svg";
import Agressif from "../../../../assets/imgs/vectors/Aggressive.svg";
import DropDownDetailsCharts from "./content/DropDownDetailsCharts.jsx";
import Cards from "./content/Cards.jsx";
import {Button, Label, Modal, TextInput} from "flowbite-react";
import {Link,} from "react-router-dom";
import html2canvas from 'html2canvas';

// Import the sendResultEmail function
import {sendResultEmail} from "../../../../services/sendEmail";

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
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const emailInputRef = useRef(null);
  const scoreLevel = dataUserScore(score.Prudent, score.modere, score.Agressif);
  const personType = statusCalculator(scoreLevel);
  const options = useRef([]);
  const progress = (index / data.length) * 100;

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
   * @function handleEmailChange
   * @description This function updates the email state when the input changes.
   * @param {Event} e - The event object.
   */
  // eslint-disable-next-line no-unused-vars
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  /**
   * @function sendEmail
   * @description This function is called when the user confirms their email. It sends the email using the sendResultEmail function.
   */
  // const sendEmail = () => {
  //   if (!email) {
  //     alert("Please enter your email address.");
  //     return;
  //   }
  //
  //   const resultData = { personType, scoreLevel };
  //   sendResultEmail(email, resultData);
  //   setOpenModal(false); // Close the modal after sending the email
  // };




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

  const captureAndSendEmail = async () => {
    if (email) {
      const captureElement = document.querySelector('.m-2.bg-gray-50');

      if (captureElement) {
        const canvas = await html2canvas(captureElement);
        const imageBase64 = canvas.toDataURL('image/png');

        // Send the result email with the image
        sendResultEmail(email, { personType, scoreLevel }, imageBase64);
      } else {
        alert("Unable to capture the report.");
      }
    } else {
      alert("Please enter your email address.");
    }
  };

  const sendEmail = () => {
    captureAndSendEmail();
    setOpenModal(false); // Close the modal after sending the email
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
      {result && (
        <div className="m-2 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center">
            <div className="lg:col-span-1 px-4 py-6 border-r border-gray-300 text-center">
              <img
                src={personTypeImages[personType]}
                alt={personType}
                className="w-36 h-36 mx-auto mb-2"
              />
              <div className="text-xl font-medium text-gray-900">
                {personType}
              </div>
            </div>
            <div className="lg:col-span-2 px-4 py-6">
              <div className="text-center">
                <p className="text-xl font-medium text-gray-900">
                  Hikma Invest
                  <br />
                  <i className="text-gray-700">
                    rêves, notre expertise. Investissons ensemble pour un avenir
                    réussi.
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

          <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-x-4 gap-y-3">
            <h1
              className={`text-2xl flex items-center pl-4 underline underline-offset-4 `}
            >
              <i>Analyse de Hikma:</i>
            </h1>
            <Cards personType={personType} scoreLevel={scoreLevel} />
            <div className="lg:col-span-2 ">
              <h1
                className={`text-2xl flex items-center pl-4 pb-2 underline underline-offset-4 `}
              >
                <i>Charts:</i>
              </h1>
            </div>
            <DropDownDetailsCharts personType={personType} />
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 items-center justify-center px-4 sm:px-12">
            <button
              type="button"
              onClick={reset}
              className="w-full sm:w-1/2 flex items-center justify-center rounded-md border text-gray-800 border-gray-500 py-3 px-8 text-base font-medium"
            >
              Répéter la simulation
            </button>
            <Link
              to={"/sign-up"}
              type="button"
              className="w-full sm:w-1/2 flex items-center justify-center rounded-md border border-transparent bg-cyan-600 py-3 px-8 text-base font-medium text-white"
            >
              Sauvegarder ma simulation
            </Link>
            <button
              type="button"
              onClick={() => setOpenModal(true)}
              className="w-full sm:w-1/2 flex items-center justify-center rounded-md border border-transparent bg-cyan-600 py-3 px-8 text-base font-medium text-white"
            >
              Envoyer par e-mail
            </button>

            <Modal
              show={openModal}
              size="md"
              popup
              onClose={() => setOpenModal(false)}
              initialFocus={emailInputRef}
            >
              <Modal.Header />
              <Modal.Body>
                <div className="space-y-6">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email" value="Your email" />
                    </div>
                    <TextInput
                      id="email"
                      ref={emailInputRef}
                      placeholder="name@company.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="w-full">
                    <Button onClick={sendEmail}>Send Results</Button>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered?&nbsp;
                    <Link
                      to="/sign-up"
                      className="text-cyan-700 hover:underline dark:text-cyan-500"
                    >
                      Create account
                    </Link>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionnaireContent;
