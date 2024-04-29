import { useState } from "react";
import CheckCard from "./checkCard/CheckCard.jsx";
import TotalBox from "./totalBox/TotalBox.jsx";
import {
  ServicesDataContext,
  useServicesDataContext,
} from "../../providers/servicesDataContext.jsx";

function CardContainer() {
  const { services, handleUpdateData, total } = useServicesDataContext();
  console.log("services??", services);

  return (
    <>
      {/* through the value we send an object with everything we need value= ((needs)) */}

      {services.map((service, index) => (
        <CheckCard
          key={service.id}
          {...service}
          handleUpdateData={() => handleUpdateData(index)}
        ></CheckCard>
      ))}
      <TotalBox total={total}></TotalBox>
    </>
  );
}

export default CardContainer;
