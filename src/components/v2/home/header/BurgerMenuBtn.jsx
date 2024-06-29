
const BurgerMenuBtn = () => {
    return (
        <div
            id="menuToggle" className=' lg:hidden mb-5'>
            <button id="menu-btn" className="lg:hidden text-cyan-600 focus:outline-none focus:text-cyan-500">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
    )
}

export default BurgerMenuBtn