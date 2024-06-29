import React from "react";
import logo from "../../../../assets/imgs/Hikma-v2.svg";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>


            <footer className="bg-white rounded-lg shadow m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link
                            to='/#'
                           className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                                <img src={logo} alt="ida tech logo" className="w-40"/>
                        </Link>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                            <li>
                                <a href="#" className="text-gray-500 hover:text-gray-700 me-4 md:me-6">Hikma invest</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-gray-700 me-4 md:me-6">Tarifs</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-gray-700 me-4 md:me-6">Questionnaire</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-gray-700 me-4 md:me-6">budget</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-gray-700 me-4 md:me-6">Accessibility</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8"/>
                    <span className="block text-sm text-gray-500 sm:text-center400">© 2024 <a
                        href="https://flowbite.com/" className="hover:underline">ID&A Tech™ </a>, Inc. Tous droits réservés.</span>
                </div>
            </footer>


            {/*<footer className="bg-white">*/}
            {/*    <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">*/}
            {/*        <nav*/}
            {/*            className="-mx-5 -my-2 flex flex-wrap justify-center"*/}
            {/*            aria-label="Footer"*/}
            {/*        >*/}
            {/*            <div className="space-y-8">*/}
            {/*                <img className="h-10" src="https://tailwindui.com/img/logos/mark.svg?color=gray&shade=300"*/}
            {/*                     alt="Company name"/>*/}
            {/*                <p className="text-base text-gray-500">Making the world a better place through constructing*/}
            {/*                    elegant hierarchies.</p>*/}
            {/*            </div>*/}

            {/*                <div className="px-5 py-2">*/}
            {/*                    <a href="#" className="text-base text-gray-500 hover:text-gray-900">*/}
            {/*                        Hikma invest*/}
            {/*                    </a>*/}
            {/*                </div>*/}
            {/*                <div className="px-5 py-2">*/}
            {/*                    <a href="#" className="text-base text-gray-500 hover:text-gray-900">*/}
            {/*                        Tarifs*/}
            {/*                    </a>*/}
            {/*                </div>*/}
            {/*                <div className="px-5 py-2">*/}
            {/*                    <a href="#" className="text-base text-gray-500 hover:text-gray-900">*/}
            {/*                        Questionnaire*/}
            {/*                    </a>*/}
            {/*                </div>*/}
            {/*                <div className="px-5 py-2">*/}
            {/*                    <a href="#" className="text-base text-gray-500 hover:text-gray-900">*/}
            {/*                        budget*/}
            {/*                    </a>*/}
            {/*                </div>*/}
            {/*                <div className="px-5 py-2">*/}
            {/*                    <a href="#" className="text-base text-gray-500 hover:text-gray-900">*/}
            {/*                        Accessibility*/}
            {/*                    </a>*/}
            {/*                </div>*/}
            {/*                <div className="px-5 py-2">*/}
            {/*                    <a href="#" className="text-base text-gray-500 hover:text-gray-900">*/}
            {/*                        Simulateur*/}
            {/*                    </a>*/}
            {/*                </div>*/}
            {/*        </nav>*/}
            {/*        <div className="mt-8 flex justify-center space-x-6">*/}
            {/*            <a href="#" className="text-gray-400 hover:text-gray-500">*/}
            {/*                <span className="sr-only">Twitter</span>*/}
            {/*                <svg*/}
            {/*                    className="h-6 w-6"*/}
            {/*                    fill="currentColor"*/}
            {/*                    viewBox="0 0 24 24"*/}
            {/*                    aria-hidden="true"*/}
            {/*                >*/}
            {/*                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />*/}
            {/*                </svg>*/}
            {/*            </a>*/}
            {/*            <a href="#" className="text-gray-400 hover:text-gray-500">*/}
            {/*                <span className="sr-only">GitHub</span>*/}
            {/*                <svg*/}
            {/*                    className="h-6 w-6"*/}
            {/*                    fill="currentColor"*/}
            {/*                    viewBox="0 0 24 24"*/}
            {/*                    aria-hidden="true"*/}
            {/*                >*/}
            {/*                    <path*/}
            {/*                        fillRule="evenodd"*/}
            {/*                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"*/}
            {/*                        clipRule="evenodd"*/}
            {/*                    />*/}
            {/*                </svg>*/}
            {/*            </a>*/}
            {/*            <a href="#" className="text-gray-400 hover:text-gray-500">*/}
            {/*                <span className="sr-only">LinkedIn</span>*/}
            {/*                <svg*/}
            {/*                    className="h-6 w-6"*/}
            {/*                    viewBox="0 0 44 42"*/}
            {/*                    fill="none"*/}
            {/*                    xmlns="http://www.w3.org/2000/svg"*/}
            {/*                >*/}
            {/*                    <path*/}
            {/*                        d="M30 14C33.1826 14 36.2348 15.2643 38.4853 17.5147C40.7357 19.7652 42 22.8174 42 26V40H34V26C34 24.9391 33.5786 23.9217 32.8284 23.1716C32.0783 22.4214 31.0609 22 30 22C28.9391 22 27.9217 22.4214 27.1716 23.1716C26.4214 23.9217 26 24.9391 26 26V40H18V26C18 22.8174 19.2643 19.7652 21.5147 17.5147C23.7652 15.2643 26.8174 14 30 14Z"*/}
            {/*                        stroke="#9CA3AF"*/}
            {/*                        strokeWidth={4}*/}
            {/*                        strokeLinecap="round"*/}
            {/*                        strokeLinejoin="round"*/}
            {/*                    />*/}
            {/*                    <path*/}
            {/*                        d="M10 16H2V40H10V16Z"*/}
            {/*                        stroke="#9CA3AF"*/}
            {/*                        strokeWidth={4}*/}
            {/*                        strokeLinecap="round"*/}
            {/*                        strokeLinejoin="round"*/}
            {/*                    />*/}
            {/*                    <path*/}
            {/*                        d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"*/}
            {/*                        stroke="#9CA3AF"*/}
            {/*                        strokeWidth={4}*/}
            {/*                        strokeLinecap="round"*/}
            {/*                        strokeLinejoin="round"*/}
            {/*                    />*/}
            {/*                </svg>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <p className="mt-8 text-center text-base text-gray-400">*/}
            {/*            © 2024 ID&amp;A Tech, Inc. Tous droits réservés.*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</footer>*/}
        </>
    )
}

export default Footer