import "./webForm.css";
import { useServicesDataContext } from "../../../contexts/servicesDataContext";
import Modal from "../../common/modal/Modal";
import { useState } from "react";

const WebForm = () => {
  const {
    handlePagesChange,
    handleLangChange,
    languages,
    pages,
    openMyModal,
    txtSending,
  } = useServicesDataContext();

  return (
    <div className="flex flex-col webFormMainDiv">
      <div className="form-control">
        <div className="flex justify-center place-items-center">
          <p>
            <button
              className="btn btn-circle btn-outline btn-xs"
              // onClick={() => document.getElementById("my_Modal").showModal()}
              onClick={() => openMyModal("pag")}
            >
              i
            </button>
            Nombre de págines:
          </p>
          <button
            className="btn btn-circle btn-outline btn-xs op-button"
            onClick={() => handlePagesChange(-1)}
          >
            -
          </button>
          <input
            type="text"
            className="w-10 rounded-md px-2 text-center"
            value={pages}
          />
          <button
            className="btn btn-circle btn-outline btn-xs op-button"
            onClick={() => handlePagesChange(+1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="form-control">
        <div className="flex justify-center items-center place-items-center">
          <p>
            <button
              className="btn btn-circle btn-outline btn-xs"
              // onClick={() => document.getElementById("my_Modal").showModal()}
              onClick={() => openMyModal("lang")}
            >
              i
            </button>
            Nombre de llenguatges:
          </p>
          <button
            className="btn btn-circle btn-outline btn-xs op-button"
            onClick={() => handleLangChange(-1)}
          >
            -
          </button>
          <input
            type="text"
            className="w-10 rounded-md px-2 text-center"
            value={languages}
          />
          <button
            className="btn btn-circle btn-outline btn-xs op-button"
            onClick={() => handleLangChange(+1)}
          >
            +
          </button>
        </div>
      </div>
      <Modal text={txtSending} />
    </div>
  );
};

export default WebForm;
