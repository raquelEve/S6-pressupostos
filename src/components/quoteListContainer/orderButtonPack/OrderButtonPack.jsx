import React from "react";
import { useQuoteListContext } from "../../../contexts/quoteListContext";

export default function OrderButtonPack() {
  // 2 call the var and functions that we will need
  const { orderbyName, orderbyData, orderbyImport } = useQuoteListContext();

  return (
    <div className="oderButtonPack flex flex-row justify-end my-6 card bg-base-200 shadow-xl p-4">
      <label className="input input-bordered flex items-center gap-2 mx-2">
        <input type="text" className="grow" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <button className="btn" onClick={orderbyData}>
        Data
      </button>
      <div className="btn mx-2">
        <label className="swap swap-rotate" onClick={orderbyImport}>
          Import
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />
          {/* icon */}
          <span className="swap-on fill-current w-10 h-10">&#8963;</span>
          {/*  icon */}
          <span className="swap-off fill-current w-10 h-10">&#8964;</span>
        </label>
      </div>
      <button className="btn mx-2" onClick={orderbyName}>
        Nom
      </button>
    </div>
  );
}
