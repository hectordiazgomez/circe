import React, { useState } from "react";
import oraciones from "../data/sentences.json";
import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import {db} from "../firebase"

const Home = () => {


    const translationRef = collection(db, "translations");

    const [translationAwajun, settranslationAwajun] = useState("")


    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const sentences = oraciones.oraciones;

    const handleNextSentence = () => {
        if (currentSentenceIndex < sentences.length - 1) {
            setCurrentSentenceIndex(currentSentenceIndex + 1);
            settranslationAwajun("");
        }
    };

    const skip = () => {
        if (currentSentenceIndex < sentences.length - 1) {
            setCurrentSentenceIndex(currentSentenceIndex + 1);
        }
    };

    const agregar = async () => {
        await addDoc(translationRef, {
            translationsAwajun: translationAwajun,
            translationsSpanish: sentences[currentSentenceIndex],
            timestamp: serverTimestamp()
        });
        alert("Agregado");
        handleNextSentence()
    }

    return (
        <>
            <div className="flex justify-center">
                <div className="w-5/6  sm:w-3/4 pt-12">
                    <p className="text-xl text-gray-700 font-semibold pb-12">
                        Agradecemos tu colaboración con el proyecto Circe.
                    </p>
                    <p className="pb-12 text-gray-500 text-justify">
                        A continuación encontrarás una lista de oraciones en español. Deberás ingresar la traducción respectiva en idioma Awajun. Si desconoces alguna oración, no ingresas ninguna traducción y continúas a la siguiente oración.
                    </p>
                </div>
            </div>
            <div className="flex text-lg pt-12 text-gray-700 justify-center">
                <p>{sentences[currentSentenceIndex]}</p>
            </div>
            <div className="flex justify-center">
                <div className="w-5/6 flex justify-center sm:w-3/4 ">
                    <textarea
                        className="w-5/6 mt-6 p-2 sm:w-1/2 rounded outline-none border-blue-500 border-2"
                        rows={6}
                        value={translationAwajun}
                        onChange={(e) => settranslationAwajun(e.target.value)}
                    ></textarea>
                </div>
            </div>
            <div className="flex pt-12 sm:px-72 pb-36 justify-evenly">
                <button
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                    onClick={agregar}
                >
                    Next
                </button>
                                <button
                                onClick={skip}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Skip
                </button>
            </div>
        </>
    );
};

export default Home;
