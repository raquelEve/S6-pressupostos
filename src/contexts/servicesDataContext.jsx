import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
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

  // * control the process of calculate total without the webform 
  const handleUpdateData = (index) => {

    updateCard(index);
    showWebForm();
    let webcalc = calcTotalWeb();
    calcTotal(webcalc);
  };

  // * calc the webForm and update the total of the "pressupost"
  const handleUpdateCalc = () => {

    let webcalc = calcTotalWeb();
    calcTotal(webcalc);
  };

  //* control (+ & -): lang + calc web part
  const handlePagesChange = (operation) => {

    updatePage(operation);
    handleUpdateCalc();
  }

  //* control (+ & -) process: lang + calc web part
  const handleLangChange = (operation) => {

    updateLang(operation);
    handleUpdateCalc();
  }

  //* use effect => webForm buttons (+ & -)
  useEffect(() => {

    handleUpdateCalc();
  });

  //* update the checkbox value
  const updateCard = (index) => {

    const updatedServices = [...services];
    updatedServices[index].hired = !updatedServices[index].hired;
    setServices(updatedServices);
  };

  //* every time that the checkbox changes
  const calcTotal = (calc) => {

    const result = services
      .filter((service) => service.hired === true)
      .reduce((sum, service) => sum + service.price, 0);

    setTotal(result + calc);
  };

  //* when web is selected
  const showWebForm = (index) => {

    //  2 is the position of web in the array
    if (index === 2 && services[index].hired) {
      return true
    }
    return false;
  }

  // ( + & - ) pages=> set
  const updatePage = (operation) => {

    if (operation === -1 && pages > 0 || operation === 1) {
      setPages(prevPages => prevPages + operation);
    }
  }

  // ( + & - ) languages=> set
  const updateLang = (operation) => {

    if (operation == -1 && languages > 0) {
      setLanguages(prevLanguages => prevLanguages - 1);
    }
    if (operation === 1) {
      setLanguages(prevLanguages => prevLanguages + 1);
    }
  }

  //  calc the web form
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
