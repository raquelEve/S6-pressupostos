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
  const [quoteListCopy, setQuoteListCopy] = useState(quoteList);
  const [hasBeenSortered, setHasBeenSortered] = useState(false);

  // Efecto para mostrar el estado actualizado de quoteList
  useEffect(() => {}, [quoteList]);

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

  //! Objeto de value
  const value = {
    handleUpdateQuoteList,
    quoteList,
    orderbyName,
    orderbyData,
    orderbyImport,
    orderBySearch,
  };

  return (
    <QuoteListContext.Provider value={value}>
      {children}
    </QuoteListContext.Provider>
  );
};
