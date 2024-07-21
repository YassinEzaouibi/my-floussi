import { Link } from 'react-router-dom'
import logo from '../../assets/imgs/logo/logo-v2.svg'
import Main from './Main.jsx'

const Dashboard= ()  => {
    return (
      <div>
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
          {/* Desktop sidebar */}
          <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
            <div className="text-gray-500 dark:text-gray-400">
              <Link to="#">
                <img
                  className="pl-6 pt-6"
                  src={logo}
                  alt={''}
                />
              </Link>
              <ul className="mt-6">
                <li className="relative px-6 py-3">
                  <span className="absolute inset-y-0 left-0 w-1 bg-cyan-600 rounded-tr-lg rounded-br-lg"
                        aria-hidden="true" />
                  <Link
                    className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                    to="/dashboard">
                    <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="ml-4">Dashboard</span>
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="relative px-6 py-3">
                  <a
                    className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                    href="forms.html">
                    <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    <span className="ml-4">Mes Questionnaires</span>
                  </a>
                </li>
                <li className="relative px-6 py-3">
                  <a
                    className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                    href="cards.html">
                    <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span className="ml-4">Tarifs</span>
                  </a>
                </li>
                <li className="relative px-6 py-3">
                  <a
                    className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                    href="charts.html">
                    <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                    <span className="ml-4">Budget</span>
                  </a>
                </li>
                <li className="relative px-6 py-3">
                  <a
                    className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                    href="buttons.html">
                    <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    <span className="ml-4">Simulateur</span>
                  </a>
                </li>
              </ul>
              <div className="fixed bottom-0 px-6">
                <Link
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  to="/">
                  <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round"
                       strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                    <path xmlns="http://www.w3.org/2000/svg" id="Vector"
                          d="M12 15L15 12M15 12L12 9M15 12H4M9 7.24859V7.2002C9 6.08009 9 5.51962 9.21799 5.0918C9.40973 4.71547 9.71547 4.40973 10.0918 4.21799C10.5196 4 11.0801 4 12.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H12.1969C11.079 20 10.5192 20 10.0918 19.7822C9.71547 19.5905 9.40973 19.2839 9.21799 18.9076C9 18.4798 9 17.9201 9 16.8V16.75"
                           strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="ml-4">Log out</span>
                </Link>
              </div>
            </div>
          </aside>
          {/* Mobile sidebar */}
          {/* Backdrop */}
          <div className="fixed inset-0 z-10 flex items-end  sm:items-center sm:justify-center" />
          <aside
            className="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden">
            <div className="py-4 text-gray-500 dark:text-gray-400">
              <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
                Windmill
              </a>
              <ul className="mt-6">
              <li className="relative px-6 py-3">
                  <span className="absolute inset-y-0 left-0 w-1 bg-cyan-600 rounded-tr-lg rounded-br-lg"
                        aria-hidden="true" />
                  <Link
                    className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                    to="dashboard">
                    <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="ml-4">Dashboard</span>
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="relative px-6 py-3">
                  <a
                    className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                    href="forms.html">
                    <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    <span className="ml-4">Forms</span>
                  </a>
                </li>
                <li className="relative px-6 py-3">
                  <a
                    className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                    href="cards.html">
                    <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span className="ml-4">Cards</span>
                  </a>
                </li>
                <li className="relative px-6 py-3">
                  <a
                    className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                    href="charts.html">
                    <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                    <span className="ml-4">Charts</span>
                  </a>
                </li>
                <li className="relative px-6 py-3">
                  <a
                    className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                    href="buttons.html">
                    <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    <span className="ml-4">Buttons</span>
                  </a>
                </li>
                <li className="relative px-6 py-3">
                  <a
                    className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                    href="modals.html">
                    <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className="ml-4">Modals</span>
                  </a>
                </li>
                <li className="relative px-6 py-3">
                  <a
                    className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                    href="tables.html">
                    <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                    <span className="ml-4">Tables</span>
                  </a>
                </li>
                <li className="relative px-6 py-3">
                  <button
                    className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
              <span className="inline-flex items-center">
                <svg className="w-5 h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round"
                     strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
                <span className="ml-4">Pages</span>
              </span>
                    <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd" />
                    </svg>
                  </button>
                  <template />
                </li>
              </ul>
              <div className="px-6 my-6">
                <button
                  className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-cyan-600 border border-transparent rounded-lg active:bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:shadow-outline-cyan">
                  Create account
                  <span className="ml-2" aria-hidden="true">+</span>
                </button>
              </div>
            </div>
          </aside>
          <div className="flex flex-col flex-1 w-full">
            <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
              <div
                className="container flex items-center justify-between h-full px-6 mx-auto text-cyan-600 dark:text-cyan-300">
                {/* Mobile hamburger */}
                <button className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-cyan">
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd" />
                  </svg>
                </button>

                {/* Search input */}
                <div className="flex justify-center flex-1 lg:mr-32">
                  <div className="relative w-full max-w-xl mr-6 focus-within:text-cyan-500">
                    <div className="absolute inset-y-0 flex items-center pl-2">
                      <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      className="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-cyan-300 focus:outline-none focus:shadow-outline-cyan form-input"
                      type="text" placeholder="Search for projects" aria-label="Search" />
                  </div>
                </div>
                <ul className="flex items-center flex-shrink-0 space-x-6">
                  {/* Theme toggler */}
                  <li className="flex">
                    <button className="rounded-md focus:outline-none focus:shadow-outline-cyan">
                      {/* eslint-disable-next-line react/no-unknown-property */}
                      <template x-if="!dark" />
                      {/* eslint-disable-next-line react/no-unknown-property */}
                      <template x-if="dark" />
                    </button>
                  </li>
                  {/* Notifications menu */}
                  <li className="relative">
                    <button className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-cyan">
                      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                      </svg>
                      {/* Notification badge */}
                      <span aria-hidden="true"
                            className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800" />
                    </button>
                  </li>
                  {/* Profile menu */}
                  <li className="relative">
                    <button className="align-middle rounded-full focus:shadow-outline-cyan focus:outline-none"
                            aria-label="Account" aria-haspopup="true">
                      <img className="object-cover w-8 h-8 rounded-full"
                           src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                           alt="" aria-hidden="true" />
                    </button>
                    <template />
                  </li>
                </ul>
              </div>
            </header>
            <Main />

          </div>
        </div>
      </div>
    )
}

export default Dashboard;