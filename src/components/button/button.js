import React from 'react';

const Button = () => {
    return (
        <>
            <button className="bg-white px-10 py-2 rounded-3xl text-gray-500 shadow-lg text-sm font-serif mx-auto flex items-center">
                Notify Me
                {/* <span class="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-purple-400 opacity-75"></span> */}
                <span class="flex h-3 w-3 ml-3">
                    <span class="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-purple-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-300"></span>
                </span>
            </button>
        </>
    );
}

export default Button;