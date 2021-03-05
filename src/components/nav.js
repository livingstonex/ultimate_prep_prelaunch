import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className="h-16 bg-white flex justify-between items-center relative shadow-md font-serif">
                <h1 className="pl-8">CCAT</h1>
                <svg className="w-6 h-6 md:pr-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                <div className="pr-8 md:block hidden">
                    <Link className="p-4" to="/">Home</Link>
                    <Link className="p-4" to="/">About</Link>
                    <Link className="p-4" to="/">Contact</Link>
                    <Link className="p-4" to="/">SingUp</Link>  
                </div>
            </nav>
        </div>
    )
}

export default Nav
