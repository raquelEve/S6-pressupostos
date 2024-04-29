import WebForm from "../webForm/WebForm";
import "./CheckCard.css";
import PropTypes from "prop-types";

const CheckCard = ({ title, description, price, hired, handleUpdateData }) => {
  return (
    <div className="card bg-base-200 shadow-xl border-2 rounded-md flex align-middle mb-3 p-6">
      <div className="card-header text-left ml-2 w-2/5 ">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="card-body w-1/4 ml-2 flex items-center">
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
            />
            <span className="label-text">Afegir</span>
          </label>
        </div>
      </div>
      <WebForm></WebForm>
    </div>
  );
};
CheckCard.Prototypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  hired: PropTypes.boolean,
  handleUpdateData: PropTypes.fun,
};
export default CheckCard;
