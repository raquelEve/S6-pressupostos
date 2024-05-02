import "./webForm.css"
import {
  useServicesDataContext,
} from "../../../providers/servicesDataContext"

const WebForm = () => {
  const { handlePagesChange, handleLangChange, languages, pages } = useServicesDataContext();
  return (
    <div className="flex flex-col webFormMainDiv">
      <div className="form-control">
        <label>Nombre de págines:</label>
        <div className="flex justify-center place-items-center">
          <button className="op-button" onClick={() => handlePagesChange(-1)}>-</button>
          <input type="text" className="w-10 rounded-md px-2 text-center" value={pages} />
          <button className="op-button" onClick={() => handlePagesChange(+1)}>+</button>
        </div>
      </div>
      <div className="form-control">
        <label>Nombre de llenguatges:</label>
        <div className="flex justify-center items-center place-items-center">
          <button className="op-button" onClick={() => handleLangChange(-1)}>-</button>
          <input type="text" className="w-10 rounded-md px-2 text-center" value={languages} />
          <button className="op-button" onClick={() => handleLangChange(+1)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default WebForm;
