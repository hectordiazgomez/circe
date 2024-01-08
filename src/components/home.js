import React, { useState } from "react";
import oraciones from "../data/sentences.json";
import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import {db} from "../firebase"
import database from "./assets/searchover.json"

const Home = () => {


    const translationRef = collection(db, "translations");

    const [translationAwajun, settranslationAwajun] = useState("")
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredSentences, setFilteredSentences] = useState([]);


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
    const [filteredEntries, setFilteredEntries] = useState([]);
    const handleSearch = (term) => {
        setSearchTerm(term);
        const lowerCaseTerm = term.toLowerCase();

        // Assuming 'database' is an object with a 'database' property
        const entries = Object.entries(database.database);

        const filtered = entries.filter(([key, value]) =>
            key.toLowerCase().includes(lowerCaseTerm) || value.toLowerCase().includes(lowerCaseTerm)
        );
        setFilteredEntries(filtered);
    };


    return (
        <>
            <div className="flex justify-center">
                <div className="w-5/6  sm:w-3/4 pt-12">
                    <p className="text-xl text-gray-700 font-semibold pb-12">
                        Agradecemos tu colaboración con el proyecto Yumi.
                    </p>
                </div>
            </div>
            <div className="flex text-xl font-medium pt-12 text-gray-700 justify-center">
                <p>{sentences[currentSentenceIndex]}</p>
            </div>
            <div className="flex justify-center">
                <div className="w-5/6 flex justify-center sm:w-3/4 ">
                    <textarea
                        className="w-full mt-6 p-2 sm:w-1/2 rounded outline-none border-blue-500 border-2"
                        rows={6}
                        value={translationAwajun}
                        onChange={(e) => settranslationAwajun(e.target.value)}
                    ></textarea>
                </div>
            </div>
            <div className="flex pt-12 sm:px-72 pb-36 justify-evenly">
                <button
                    className="mt-4 bg-blue-500 text-white font-semibold py-2 px-5 rounded"
                    onClick={agregar}
                >
                    Siguiente 
                </button>
                                <button
                                onClick={skip}
                    className="mt-4 bg-blue-500 text-white py-2 font-semibold px-5 rounded"
                >
                    Saltar
                </button>
            </div>
            <div className="flex justify-center">
            <div className="w-5/6 pb-6 sm:w-3/4">
                    <p className="pt-6 pb-8">Busca una palabra o frase</p>
                    <input 
                    
                        className="p-2 rounded outline-none w-full sm:w-1/2 border-2 border-gray-500"
                        placeholder="Busca acá"
                        value={searchTerm}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
            </div>
            </div>
            <div className="flex justify-center">
                <div className="w-5/6 pb-20 sm:w-3/4">
                    <p className="pb-3">Resultados</p>
                    <div className="text-gray-700">
                        {searchTerm && filteredEntries.length > 0 ? (
                            filteredEntries.map(([key, value], index) => (
                                <p className="py-3" key={index}>{`${key}: ${value}`}</p>
                            ))
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
