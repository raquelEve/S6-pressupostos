import React, { createContext, useContext, useEffect, useState } from "react";
import { useServicesDataContext } from "./servicesDataContext";
import { useLocation } from "react-router-dom";

// 1. Crear el contexto
const QuoteListContext = createContext();

// 2. Crear el hook useContext
export const useQuoteListContext = () => {
    return useContext(QuoteListContext);
};


// 3. Proveedor de contexto
export const QuoteListContextProvider = ({ children }) => {

    const { fillServicesFromUrl } = useServicesDataContext();

    // variables de aqui:
    const [quoteList, setQuoteList] = useState([]);
    const [quoteListCopy, setQuoteListCopy] = useState(quoteList);
    const [hasBeenSortered, setHasBeenSortered] = useState(false);
    const location = useLocation();

    // Efecto para mostrar el estado actualizado de quoteList
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        handleQueryParams(queryParams);
    }, [quoteList, location]);

    // Función
    const handleUpdateQuoteList = (quote) => {
        if (quote.services.length !== 0) {
            if (
                quote.user.name !== null &&
                quote.user.tel !== null &&
                quote.user.email !== null
            ) {
                const updatedQuoteList = [...quoteList, quote];
                setQuoteListCopy(updatedQuoteList);
                setQuoteList(updatedQuoteList);
            }
        }
    };

    //* Order by functions::

    const orderbyName = () => {
        const ordercopy = [...quoteList];
        ordercopy.sort((a, b) => a.user.name.localeCompare(b.user.name));
        setQuoteList(ordercopy);
    };

    const orderbyData = () => {
        const ordercopy = [...quoteList];
        ordercopy.sort((a, b) => a.id - b.id);
        setQuoteList(ordercopy);
    };

    const orderbyImport = () => {
        const ordercopy = [...quoteList];

        if (hasBeenSortered) {
            ordercopy.sort((a, b) => b.total - a.total);
        } else {
            ordercopy.sort((a, b) => a.total - b.total);
        }
        setHasBeenSortered(!hasBeenSortered);
        setQuoteList(ordercopy);
    };

    const orderBySearch = (e) => {
        // * filter does a copy without references

        setQuoteList(quoteListCopy);
        if (e === "") {
            setQuoteList(quoteListCopy);
        } else {
            const ordercopy = quoteListCopy.filter((quote) =>
                quote.user.name.includes(e)
            );
            setQuoteList(ordercopy);
        }
    };

    const sendQuote = (id) => {
        const quote = quoteList.find(item => item.id === id);
        // let currentURL = window.location.href;
        let urlParams = "";
        if (quote) {
            quote.services.forEach(service => {
                urlParams += `&${service.title}=${service.hired}`
                if (service.extras) {
                    if (service.extras.pages)
                        urlParams += `&pages=${service.extras.pages}`;
                    if (service.extras.languages)
                        urlParams += `&lang=${service.extras.languages}`;
                }
            });

            // currentURL += `?${urlParams}`;
            // window.location.href = currentURL;
            const newParams = new URLSearchParams(urlParams);
            const newSearch = `?${newParams.toString()}`;

            // Redirigir a la URL con los parámetros
            window.location.href = `${location.pathname}${newSearch}`;
        }
    }

    const handleQueryParams = (queryParams) => {

        // Seo → "true", Ads → "true", Web → "true", pages → "2", lang → "3"
        if (queryParams !== '') {

            fillServicesFromUrl(queryParams);
        }

    };
    //! Objeto de value
    const value = {
        handleUpdateQuoteList,
        quoteList,
        orderbyName,
        orderbyData,
        orderbyImport,
        orderBySearch,
        sendQuote
    };

    return (
        <QuoteListContext.Provider value={value}>
            {children}
        </QuoteListContext.Provider>
    );
};
