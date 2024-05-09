import CheckCard from "./checkCard/CheckCard.jsx";
import TotalBox from "./totalBox/TotalBox.jsx";
import { useServicesDataContext } from "../../contexts/servicesDataContext.jsx";
import "./chekCardContainer.css";

function CardContainer() {
  const { services, handleUpdateData, showWebForm, anualDiscount, anualDisc } =
    useServicesDataContext();

  return (
    <>
      {/* discount checkbox */}
      <div className="form-control switch-check" onClick={anualDiscount}>
        <label className="cursor-pointer label">
          <span>Pagament Mensual</span>
          <input type="checkbox" className="checkbox checkbox-warning" />
          <span>pagament Anual</span>
        </label>
      </div>

      {/* services cards */}
      {services.map((service, index) => (
        <CheckCard
          key={service.id}
          {...service}
          handleUpdateData={() => handleUpdateData(index)}
          // showWebForm={() => showWebForm(index)}
          showWebForm={index === 2 && service.hired}
          anualDisc={anualDisc}
        ></CheckCard>
      ))}
      <TotalBox></TotalBox>
    </>
  );
}

export default CardContainer;
