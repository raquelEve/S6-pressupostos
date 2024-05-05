import React, { createContext, useContext, useEffect, useState } from 'react';
import { useServicesDataContext } from "./servicesDataContext";

// 1. Crear el contexto
const QuoteListContext = createContext();

// 2. Crear el hook useContext
export const useQuoteListContext = () => {
    return useContext(QuoteListContext);
};

// 3. Proveedor de contexto
export const QuoteListContextProvider = ({ children }) => {


    // variables de aqui:
    const [quoteList, setQuoteList] = useState([]);

    // Efecto para mostrar el estado actualizado de quoteList
    useEffect(() => {
        console.log("quote: effect actualizado:", quoteList);
    }, [quoteList]);

    // Función de saludo
    const handleUpdateQuoteList = (quote) => {
        if (quote.services.length !== 0) {
            if (quote.user.name !== null && quote.user.tel !== null && quote.user.email !== null) {
                const updatedQuoteList = [...quoteList, quote];
                console.log("Hola: update", updatedQuoteList);
                setQuoteList(updatedQuoteList);

            }
        }
    };

    // Objeto de valor que contiene la función de saludo
    const value = {
        handleUpdateQuoteList,
        quoteList
    };

    return (
        <QuoteListContext.Provider value={value}>
            {children}
        </QuoteListContext.Provider>
    );
};
