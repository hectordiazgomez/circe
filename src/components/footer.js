import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="sm:flex bg-gray-200">
                <div className="sm:w-1/6 w-full items-center flex justify-center py-12">
                    <p className="text-2xl text-blue-500 font-semibold">Yumi</p>
                </div>
                <div className="w-full pt-6 sm:w-5/6 grid grid-cols-1 sm:grid-cols-2">
                    <div></div>
                    <div className="flex justify-evenly items-center pb-20 sm:py-12 px-4 sm:px-12">
                        <a href="https://www.facebook.com/konlap" target="_blank" className="text-blue-500 cursor-pointer font-semibold">Acerca de</a>
                        <Link to="/policy" className="text-blue-500 cursor-pointer font-semibold">Política de privacidad</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;