import { ServicesDataProvider } from '../../contexts/servicesDataContext';
import { UserDataContextProvider } from '../../contexts/userDataContext';
// import { QuoteListContextProvider } from '../../contexts/quotationListContext';
import { QuoteListContextProvider } from '../../contexts/quoteListContext'
import Navbar from '../common/Navbar/Navbar';
import CheckCardContainer from '../CardContainer/CheckCardContainer';
import UserDataForm from '../userDataContainer/userDataForm'
import QuoteListContainer from '../quoteListContainer/QuoteListContainer';


const CalculadoraPage = () => {
    return (
        <div className='mb-8'>
            <Navbar></Navbar>
            <div className="jumbotron mb-4">
                <h1 className="text-6xl">Frontender:itacademy</h1>
            </div>
            <ServicesDataProvider>
                <QuoteListContextProvider> {/* Corregido */}
                    <UserDataContextProvider>
                        <CheckCardContainer />
                        <UserDataForm />
                        <QuoteListContainer />
                    </UserDataContextProvider>
                </QuoteListContextProvider> {/* Corregido */}
            </ServicesDataProvider>
        </div>
    );
}

export default CalculadoraPage;
