import { render } from '@testing-library/react';
import React from 'react';
import {useState } from 'react-dom';
import Button from './button/button';

const LandingPage = () => {
    return(
        <>
            <div className="h-screen w-screen bg-gradient-to-r from-purple-500 to-blue-500">
            <nav className="h-16 flex justify-between items-center relative font-serif">
                <h1 className="pl-12 text-white text-xl font-serif">Ultimate Prep</h1>
                <div className="pr-8 ">
                    {/* <a classname="text-white">Home</a> */}
                    <button className="bg-white px-6 py-2 rounded-lg text-gray-500 shadow-md text-sm font-serif">
                        More Info
                    </button>

                    {/* <span class="flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-purple-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                    </span> */}
                </div>
            </nav>
            <Button />
            </div>
        </>
    );
}

export default LandingPage