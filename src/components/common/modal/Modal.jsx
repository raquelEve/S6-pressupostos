import React, { useState } from "react";

export default function Modal({ text }) {
  //   const [newText, setNewText] = useState({});
  //   setNewText(text);
  return (
    <dialog id="my_Modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{text.title}</h3>
        <p
          className="py-4 bold"
          dangerouslySetInnerHTML={{ __html: text.text }}
        ></p>
        <small className="py-4">
          Press ESC key or click the button below to close
        </small>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
