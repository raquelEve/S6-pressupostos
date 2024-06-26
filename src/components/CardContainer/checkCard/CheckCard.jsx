import WebForm from "../webForm/WebForm";
import "./CheckCard.css";
import PropTypes from "prop-types";

const CheckCard = ({
  title,
  description,
  price,
  hired,
  handleUpdateData,
  showWebForm,
  anualDisc,
}) => {
  return (
    <div className="card bg-base-200 shadow-xl  mb-3">
      <div className="flex align-middle p-6  border-2 rounded-md">
        <div className="card-header text-left ml-2 w-2/5 ">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="card-body w-1/4 ml-2 flex items-center">
          {anualDisc && <p className="text-orange-500">Ahorra un 20%</p>}
          <p className="text-3xl">
            {price}
            <span className="text-sm"> €</span>
          </p>
        </div>
        <div className="card-footer w-1/4">
          <div className="form-control card-actions">
            <label className="label cursor-pointer flex items-center">
              <input
                type="checkbox"
                className="checkbox checkbox-secondary"
                checked={hired}
                onChange={handleUpdateData}
                id={title}
              />
              <span className="label-text">Afegir</span>
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-end p-6">{showWebForm && <WebForm />}</div>
    </div>
  );
};
CheckCard.Prototypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  hired: PropTypes.boolean,
  handleUpdateData: PropTypes.fun,
  // because the return  of the function is a boolean
  showWebForm: PropTypes.bool,
  anualDisc: PropTypes.bool,
};
export default CheckCard;
