import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useServicesDataContext } from "./servicesDataContext";
// import { useQuotesListContext } from "./quotationListContext";
// nuevo contexto
import { useQuoteListContext } from "./quoteListContext";

// 1. Create the context
const UserDataContext = createContext();

// 2. Create the useContext
export const useUserDataContext = () => {
  return useContext(UserDataContext);
};

// 3. Context provider
export const UserDataContextProvider = ({ children }) => {
  // 4. Logic here:
  const { resetServices, getHiredServicesData } = useServicesDataContext();
  const { handleUpdateQuoteList, quoteList } = useQuoteListContext();
  let id = 0;

  // 5. Create the useState & useEffect
  const [userData, setUserData] = useState({
    name: null,
    tel: null,
    email: null,
  });

  useEffect(() => {
    let quoteObj = buildQuoteObject();
    handleUpdateQuoteList(quoteObj);
  }, [userData]);

  // 6 handlefunction
  // const handleQuoteDataProcess = (name, tel, email) => {

  //      saveUserData(name, tel, email);
  //      const quoteObj = buildQuoteObject(); // Obtener directamente el objeto de la cotización
  //      handleUpdateQuoteList(quoteObj); // Llamar directamente a handleUpdateQuoteList con el objeto de cotización
  //      resetServices();
  // }

  // 6 handlefunction
  const handleQuoteDataProcess = async (name, tel, email) => {
    // Guardar los datos del usuario de forma asíncrona
    await saveUserData(name, tel, email);

    resetServices();
  };

  // 7. Save the user data
  const saveUserData = (name, tel, email) => {
    setUserData({ name, tel, email });
  };

  const buildQuoteObject = () => {
    const quoteObj = {};

    const { services, total } = getHiredServicesData();
    // quoteObj.services = { ...getHiredServicesData() };
    quoteObj.services = [...services];
    quoteObj.total = total; //este es nuevo
    quoteObj.user = { ...userData };
    quoteObj.id = quoteList.length;
    return quoteObj;
  };

  // 8. Log userData each update
  useEffect(() => { }, [userData]);

  // 9. get funtcion
  const getUserData = () => {
    return userData;
  };

  // 10. Return object with user data and saveUserData function
  const value = {
    userData,
    handleQuoteDataProcess,
    getUserData,
  };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};

// 8. PropTypes for UserDataContextProvider
UserDataContextProvider.propTypes = {
  children: PropTypes.node,
};

export default UserDataContext;
