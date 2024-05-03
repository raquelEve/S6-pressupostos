import CheckCard from "./checkCard/CheckCard.jsx";
import TotalBox from "./totalBox/TotalBox.jsx";
import {
  useServicesDataContext,
} from "../../contexts/servicesDataContext.jsx";

function CardContainer() {
  const { services, handleUpdateData, showWebForm } = useServicesDataContext();


  return (
    <>
      {/* through the value we send an object with everything we need value= ((needs)) */}

      {services.map((service, index) => (
        <CheckCard
          key={service.id}
          {...service}
          handleUpdateData={() => handleUpdateData(index)}
          // showWebForm={() => showWebForm(index)}
          showWebForm={index === 2 && service.hired}
        ></CheckCard>
      ))}
      <TotalBox></TotalBox>
    </>
  );
}

export default CardContainer;
