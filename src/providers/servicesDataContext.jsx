import React, { createContext, useContext, useState } from "react";
import servicesData from "../data/servicesData";

// Creamos el contexto
const ServicesDataContext = createContext();

// Función para utilizar el contexto
export function useServicesDataContext() {
  return useContext(ServicesDataContext);
}

// Proveedor de contexto
export function ServicesDataProvider({ children }) {
  const [services, setServices] = useState(servicesData);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(0);
  const [languages, setLanguages] = useState(0);


  const handleUpdateData = (index) => {
    updateCard(index);
    showWebForm();
    let webcalc = calcTotalWeb();
    calcTotal(webcalc);
  };
  const handleUpdateCalc = () => {
    let webcalc = calcTotalWeb();
    calcTotal(webcalc);
  };
  // control de sumar pagina y restar
  const handlePagesChange = (operation) => {
    updatePage(operation);
    handleUpdateCalc();
  }
  const handleLangChange = (operation) => {
    updateLang(operation);

  }

  const updateCard = (index) => {
    const updatedServices = [...services];
    updatedServices[index].hired = !updatedServices[index].hired;
    setServices(updatedServices);

  };

  const calcTotal = (calc) => {
    const result = services
      .filter((service) => service.hired === true)
      .reduce((sum, service) => sum + service.price, 0);

    setTotal(result + calc);
  };

  const showWebForm = (index) => {
    // * 2 is the position od web in the array
    if (index === 2 && services[index].hired) {
      return true
    }
    return false;
  }


  const updatePage = (operation) => {
    if (operation === -1 && pages > 0 || operation === 1) {
      setPages(pages + operation);

    }
  }
  // control de sumar pagina y restar
  const updateLang = (operation) => {

    if (operation == -1 && languages > 0) {
      setLanguages(prevLanguages => prevLanguages - 1);
    }
    if (operation === 1) {
      setLanguages(prevLanguages => prevLanguages + 1);

    }

  }

  const calcTotalWeb = () => {

    if (services[2].hired === true) {
      return (pages * 30) + (languages * 30);

    } else {
      return 0
    }
  };

  return (
    <ServicesDataContext.Provider value={{ services, handleUpdateData, total, handlePagesChange, handleLangChange, showWebForm, pages, languages }}>
      {children}
    </ServicesDataContext.Provider>
  );
}
