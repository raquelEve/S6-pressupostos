import { ServicesDataProvider } from '../../contexts/servicesDataContext';
import CheckCardContainer from '../CardContainer/CheckCardContainer';
import Navbar from '../common/Navbar/Navbar';

const CalculadoraPage = () => {
    return (
        <div className='mb-8'>
            <Navbar></Navbar>
            <div className="jumbotron mb-4">
                <h1 className="text-6xl">Frontender:itacademy</h1>
            </div>
            <ServicesDataProvider>
                <CheckCardContainer />
            </ServicesDataProvider>
        </div>
    );
}

export default CalculadoraPage;
