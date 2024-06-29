import React from 'react'

const LoginBtn = () => {
    return (
        <div className="hidden md:flex md:items-center md:space-x-6 lg:flex lg:w-auto">
            <a href="#" className="text-base font-medium text-white hover:text-gray-300">Connexion</a>
            <a href="#"
               className="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-base font-medium text-white hover:bg-gray-900">Inscription</a>
        </div>

    )
}

export default LoginBtn