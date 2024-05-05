import { createContext, useContext, useState } from 'react';
import PropTypes from "prop-types";
import { useServicesDataContext } from "./servicesDataContext";
import { useUserDataContext } from './userDataContext';
// 1. import all the providers

// 2. create context
const QuoteListContext = createContext();

// 3. create useContext
export const useQuotesListContext = () => {
    return useContext(QuoteListContext);
}


//* context provider
export const QuoteListContextProvider = ({ children }) => {

    // 4. get variables from the contexts
    const { getHiredServicesData } = useServicesDataContext();
    const { getUserData } = useUserDataContext();

    // 5 thiscontext variables => useStates
    const [quoteList, setQuoteList] = useState([]);

    // 6. logica:
    // x. set the quote object and push 
    const saludo = () => {
        console.log("hola");
    }
    const handleQuoteList = () => {
        console.log("en hadle quote list");
        const updatedQuoteList = [...quoteList];
        const newQuote = {
            user: getUserData(),
            service: getHiredServicesData()
        }
        console.log(newQuote);
        updatedQuoteList.push(newQuote);
        setQuoteList(updatedQuoteList);
    }


    // x. definicion value
    const value = { quoteList, handleQuoteList, saludo }


    return (
        <QuoteListContext.Provider value={value}>
            {children}
        </QuoteListContext.Provider>
    );
}
QuoteListContextProvider.propTypes = {
    children: PropTypes.node
};
export default QuoteListContext;
