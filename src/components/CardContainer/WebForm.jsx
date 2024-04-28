
const WebForm = () => {
    return (
        <div className='flex'>
            <div className="form-control">
                <label>Nombre de págines:</label>
                <button className="btn btn-outline btn-info">-</button>
                <input type="text"></input>
                <button className="btn btn-outline btn-info">+</button>
            </div>
            <div className="form-control">
                <label>Nombre de llenguatges:</label>
                <button className="btn btn-outline btn-info">-</button>
                <input type="text"></input>
                <button className="btn btn-outline btn-info">+</button>
            </div>
        </div>
    );
}

export default WebForm;
