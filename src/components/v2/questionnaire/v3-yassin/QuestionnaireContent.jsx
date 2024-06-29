import {useRef, useState} from "react";
import {idaData as data} from '../../../../assets/data/ida-data.js'
import logo from '../../../../assets/imgs/lamp.svg'


const QuestionnaireContent = () => {

    let [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState({ Prudent: 0, modere: 0, Agressif: 0 });
    const [result, setResult] = useState(false)
    const [selectedChoice, setSelectedChoice] = useState(null);

    const options = useRef([]);

    const checkAns = (e, ans) => {
        const chosenPoints = question.points[ans];
        setScore(prev => ({
            Prudent: prev.Prudent + chosenPoints.Prudent,
            modere: prev.modere + chosenPoints.modere,
            Agressif: prev.Agressif + chosenPoints.Agressif
        }));
        setSelectedChoice(ans);
        setLock(true);
    }

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
    }

    const previous = () => {
        if(index > 0){
            setIndex(--index);
            setQuestion(data[index]);
            setSelectedChoice(null);
            setLock(false);
        }
    }

    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore({Prudent: 0, modere: 0, Agressif: 0});
        setLock(false);
        setResult(false);
    }

    return (
        <div className='container mx-auto text-black flex flex-col space-y-4 p-2 mt-6 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 font-poppins text-sm'>
            {result ? <></> : <>
                <h1 className='text-2xl sm:text-3xl text-blue-600'>{question.group}</h1>
                <hr className='h-0.5 bg-gray-300 border-none' />
                <div>
                    <h2 className='text-xl sm:text-xl font-semibold mb-2'>{index + 1}. {question.question}</h2>
                    {question.field && <li className='text-gray-400 font-semibold'>{question.field}</li>}
                </div>

                <ul className={`overflow-auto ${
                    Object.keys(question.choices).length === 2
                        ? 'grid grid-cols-1 gap-4'
                        : 'grid grid-cols-1 sm:grid-cols-2 gap-4'
                }`
                }>
                    {Object.keys(question.choices).map((key, idx) => (
                        <li
                            key={key}
                            ref={ref => options.current[key - 1] = ref}
                            onClick={(e) => checkAns(e, key)}
                            className={`flex items-center justify-center text-center h-12 sm:h-16 pl-4 sm:pl-6 border border-gray-600 rounded-lg lg:text-base text-sm cursor-pointer hover:bg-gray-200 transition-colors duration-500 ${selectedChoice === key ? 'bg-gray-300' : ''} ${
                                Object.keys(question.choices).length % 2 !== 0 && idx === Object.keys(question.choices).length - 1
                                    ? 'sm:col-span-2'
                                    : ''}`
                            }>
                            {question.choices[key]}
                        </li>
                    ))}
                </ul>

                <div className='flex justify-center space-x-4 mt-4'>
                    <button
                        onClick={previous}
                        aria-label="Previous Question"
                        className='w-full sm:w-1/3  h-12 sm:text-lg  text-sm rounded-lg text-gray-900 bg-white border border-gray-300 hover:bg-gray-100'
                    >
                        Previous
                    </button>
                    <button
                        onClick={next}
                        aria-label="Next Question"
                        className='w-full sm:w-1/3  h-12 bg-blue-600  text-white rounded-lg hover:bg-blue-800 sm:text-lg  text-sm cursor-pointer transition-colors duration-200'
                    >
                        Next
                    </button>
                </div>
                <div className='mx-auto text-base sm:text-lg font-medium'><span className="text-blue-600">{index + 1}</span> of {data.length} questions</div>
            </>
            }
            {
                result ?
                    <div className="m-2 bg-gray-50 rounded-lg">
                        <div className="mx-auto py-16 px-4">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center">
                                <div className="flex justify-center">
                                    <img
                                        className="w-40 mb-4"
                                        // src={selectedChoice === '2' ? "https://img.icons8.com/?size=256&id=80841&format=png" : "https://img.icons8.com/?size=256&id=80976&format=png"}
                                        src={logo}
                                        alt="User"
                                    />
                                </div>

                                {/* Score details */}
                                <div className="lg:pl-8 col-span-2">
                                    <div>
                                        <p className="text-xl font-medium tracking-tight text-gray-900">
                                            Hikma Invest:<br/>
                                            <i className="text-gray-700">
                                                rêves, notre expertise. Investissons ensemble pour un avenir réussi.
                                            </i>
                                        </p>
                                        <h1 className="mt-2 text-sm text-gray-500">Votre score</h1>
                                    </div>

                                    <div className="mt-6  text-xl grid grid-cols-3 font-semibold">
                                        <p className="text-blue-800">Prudent: {score.Prudent}
                                        </p>
                                        <p className="text-green-700">Modéré: {score.modere}
                                        </p>
                                        <p className="text-red-700" >Agressif: {score.Agressif}
                                        </p>
                                    </div>

                                    <div className="mt-10 flex items-center justify-center">
                                        <button
                                            type="button"
                                            onClick={reset}
                                            className="flex w-1/2 items-center justify-center rounded-md border border-transparent bg-blue-600 py-3 px-8 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2"
                                        >
                                            Répéter
                                        </button>
                                    </div>

                                    <div className="mt-10 border-t border-gray-200 pt-10">
                                        <h3 className="text-sm font-medium text-gray-900">Investir</h3>
                                        <p className="mt-4 text-sm text-gray-500">
                                            Hikma Invest, seule plateforme au Maroc qui crée des placements sur-mesure
                                            pour chacun de vos projets de vie.{' '}
                                            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                                cliquez ici pour investir
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <></>
            }
        </div>
    )
}

export  default QuestionnaireContent

