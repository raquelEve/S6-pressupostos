const WebForm = () => {
  return (
    <div className="flex flex-col">
      <div className="form-control">
        <label>Nombre de págines:</label>
        <div className="flex justify-center items-center">
          <button className="mx-4 rounded-full border-solid">-</button>
          <input type="text" className="w-10 rounded-md"></input>
          <button className="mx-4 rounded-full border-solid">+</button>
        </div>
      </div>
      <div className="form-control">
        <label>Nombre de llenguatges:</label>
        <button className="btn">-</button>
        <input type="text" className="w-10"></input>
        <button className="btn">+</button>
      </div>
      <button className="btn">Hello daisyUI</button>
    </div>
  );
};

export default WebForm;
