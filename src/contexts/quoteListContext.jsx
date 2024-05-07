import React, { createContext, useContext, useEffect, useState } from "react";
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
  useEffect(() => {}, [quoteList]);

  // Función de saludo
  const handleUpdateQuoteList = (quote) => {
    if (quote.services.length !== 0) {
      if (
        quote.user.name !== null &&
        quote.user.tel !== null &&
        quote.user.email !== null
      ) {
        const updatedQuoteList = [...quoteList, quote];
        setQuoteList(updatedQuoteList);
      }
    }
  };

  //* Order by functions::

  const orderbyName = () => {
    console.log("by name");
    // const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
    // items.sort((a, b) => a.localeCompare(b));
  };
  const orderbyData = () => {
    console.log("by data");
  };
  const orderbyImport = () => {
    console.log("by import");
  };

  //! Objeto de value
  const value = {
    handleUpdateQuoteList,
    quoteList,
    orderbyName,
    orderbyData,
    orderbyImport,
  };

  return (
    <QuoteListContext.Provider value={value}>
      {children}
    </QuoteListContext.Provider>
  );
};
