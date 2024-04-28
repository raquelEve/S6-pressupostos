import { useState } from 'react';
import servicesData from '../../data/servicesData.js';
import CheckCard from './checkCard/CheckCard.jsx';
import TotalBox from './TotalBox.jsx';

function CardContainer() {
    const [services, setServices] = useState(servicesData);
    let [total, setTotal] = useState(0);

    const handleUpdateData = (index) => {
        updateCard(index);
        calcTotal();
    }

    const updateCard = (index) => {
        const updateServices = [...servicesData];
        updateServices[index].hired = !updateServices[index].hired;
        setServices(updateServices);
    }
    const calcTotal = () => {
        const result = servicesData.filter((service) => service.hired === true)
            .reduce((sum, result) => sum + result.price, 0);
        setTotal(result);
    }

    return (
        <>
            {services.map((service, index) =>
                <CheckCard key={service.id} {...service} handleUpdateData={() => handleUpdateData(index)}></CheckCard>
            )}
            <TotalBox total={total}></TotalBox>
        </>
    );
}

export default CardContainer;
