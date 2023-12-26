import React, { useState, useEffect } from "react"

const Footer = () => {
    return (
        <div>
            <div className="sm:flex bg-gray-200">
                <div className="sm:w-1/6 w-full items-center flex justify-center py-12">
                    <p className="text-2xl text-blue-500 font-semibold">Circe</p>
                </div>
                <div className="w-full pt-12 sm:w-5/6 grid grid-cols-1 sm:grid-cols-2">
                    <div></div>
                    <div className="flex items-center py-6 sm:py-12 px-4 sm:px-12">
                        <p className="text-gray-700 cursor-pointer">Estámos recolectando información para crear el primer traductor español-awajun y viceversa. Puedes contactarnos a contact@konlap.com o al Whatsapp 913454892. Agradecemos cualquier colaboración.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;