import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="flex bg-gray-200">
        <div className="w-full sm:w-1/3 flex justify-center py-12">
            <Link to="/" className="text-2xl cursor-pointer text-blue-500 font-semibold">Yumi</Link>
        </div>
        <div className="hidden sm:flex w-1/3">

        </div>
                <div className="w-1/3 hidden sm:flex items-center justify-evenly">
                    <a href="https://www.facebook.com/konlap" target="_blank" className="text-blue-500 cursor-pointer font-semibold">Acerca de</a>
                    <Link to="/policy" className="text-blue-500 cursor-pointer font-semibold">Política de privacidad</Link>
                </div>
            </div>
        </>
    )
}

export default Header;