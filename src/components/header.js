import React, { useState, useEffect } from "react"

const Header = () => {
    return (
        <div>
            <div className="flex bg-gray-200">
        <div className="sm:w-1/6 w-full flex justify-center py-12">
            <p className="text-2xl text-blue-500 font-semibold">Circe</p>
        </div>
        <div className="w-0 sm:w-5/6 grid grid-cols-2">
<div></div>
<div className="flex items-center py-12 justify-evenly">
<p className="text-lg font-semibold text-gray-700 cursor-pointer">Acerca de</p>
<button className="px-5 py-2 rounded border-2 border-blue-500 text-lg font-semibold text-blue-500 bg-white hover:bg-blue-100">Ingresar</button>
</div>
        </div>
            </div>
        </div>
    )
}

export default Header;