import logo from "../../../../assets/imgs/logo/logo-v2.svg";
import {Link} from "react-router-dom";

const signUp = () => {
    return (
        <div className="flex justify-center min-h-full">
            <div className="flex-col justify-center py-6 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <img className="h-24 w-36"
                             src={logo}
                             alt="Your Company"/>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                            Créer un compte
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Ou  &nbsp;
                            <Link
                                to="/login"
                                className="font-medium text-cyan-600 hover:text-cyan-500"
                            >
                                Connectez-vous à votre compte
                            </Link>
                        </p>
                    </div>

                    <div className="mt-8">
                        <div>
                            <div>
                                <p className="text-sm font-medium text-gray-700">Se connecter avec</p>

                                <div className="mt-1 grid grid-cols-3 gap-3">

                                    <div>
                                        <a href="#"
                                           className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                                            <span className="sr-only">Connecter avec Facebook</span>
                                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
                                                 aria-hidden="true">
                                                <path fillRule="evenodd"
                                                      d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </a>
                                    </div>

                                    <div>
                                        <a href="#"
                                           className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                                            <span className="sr-only">Connecter avec Google</span>
                                            <svg
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                                fill="currentColor">
                                                <path
                                                    d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"/>
                                            </svg>
                                        </a>
                                    </div>

                                    <div>
                                        <a href="#"
                                           className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                                            <span className="sr-only">Connecter avec Twitter</span>
                                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
                                                 aria-hidden="true">
                                                <path
                                                    d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                                            </svg>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className="relative mt-4">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="bg-white px-2 text-gray-500">Ou continuez avec</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">

                            <form action="#" method="POST" className="space-y-3">

                                <div>
                                    <div className="mt-1">
                                        <input id="email" name="email" type="email" autoComplete="email" placeholder="Full Name" required
                                               className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"/>
                                    </div>
                                </div>

                                <div>
                                    <div className="mt-1">
                                        <input id="email" name="email" type="email" autoComplete="email"  placeholder="Email address" required
                                               className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"/>
                                    </div>
                                </div>

                                <div>
                                    <div className="mt-1">
                                        <input id="email" name="email" type="email" autoComplete="email" placeholder="Password" required
                                               className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"/>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <div className="mt-1">
                                        <input id="password" name="password" type="password"
                                               autoComplete="current-password" placeholder="Confirm Password" required
                                               className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"/>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox"
                                               className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"/>
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember
                                            me</label>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <button type="submit"
                                            className="flex w-full justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 ">s'inscrire
                                    </button>
                                    <Link
                                        to="/"
                                        className="flex w-full justify-center rounded-md border border-gray-300 py-2 px-4 text-sm font-medium shadow-sm "> Retour
                                        a Hikma
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default signUp