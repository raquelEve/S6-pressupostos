import React, { createContext, useContext, useState } from "react";
import servicesData from "../../data/servicesData";

// Creamos el contexto
export const ServicesDataContext = createContext();

// Función para utilizar el contexto
export function useServicesDataContext() {
  return useContext(ServicesDataContext);
}

// Proveedor de contexto
export function ServicesDataProvider({ children }) {
  const [services, setServices] = useState(servicesData);
  const [total, setTotal] = useState(0);

  const handleUpdateData = (index) => {
    updateCard(index);
    calcTotal();
    calcTotalWeb();
  };

  const updateCard = (index) => {
    const updatedServices = [...services];
    updatedServices[index].hired = !updatedServices[index].hired;
    setServices(updatedServices);
  };

  const calcTotal = () => {
    const result = services
      .filter((service) => service.hired === true)
      .reduce((sum, service) => sum + service.price, 0);
    setTotal(result);
  };

  const calcTotalWeb = () => {
    if (services[2].hired === true) {
      // Cálculos adicionales
    }
  };

  return (
    <ServicesDataContext.Provider value={{ services, handleUpdateData, total }}>
      {children}
    </ServicesDataContext.Provider>
  );
}
