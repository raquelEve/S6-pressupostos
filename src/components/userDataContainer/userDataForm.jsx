import { useRef } from "react";
import {
    useUserDataContext,
} from "../../contexts/userDataContext.jsx";

const UserDataForm = () => {
    // 1 import the context
    // 2 coger lo que necesitemos del contexto

    const { handleQuoteDataProcess } = useUserDataContext();
    // 3. logic here:

    // 4 create the form ref
    const nameRef = useRef(null);
    const telRef = useRef(null);
    const emailRef = useRef(null);
    const formRef = useRef(null);

    // 5. recoger los datos

    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita el envío del formulario
        const name = nameRef.current.value;
        const tel = telRef.current.value;
        const email = emailRef.current.value;

        await handleQuoteDataProcess(name, tel, email);

        formRef.current.reset();
    };


    return (
        <>
            <div className="card bg-base-200 shadow-xl mb-3 p-4">
                <h2 className="text-2xl font-bold mb-4">Demanar Pressupost</h2>
                <form onSubmit={handleSubmit} ref={formRef}>
                    <div className="flex justify-content-center">
                        <label className="input input-bordered flex items-center gap-2 w-1/5 mx-1">
                            Nom:
                            <input type="text" className="grow" name="name" placeholder="nom" ref={nameRef} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-1/5 mx-1">
                            Telèfon:
                            {/* <input type="tel" id="phone" name="phone" placeholder="555123123" pattern="[0-9]{9}" ref={telRef} /> */}
                            <input type="text" id="phone" name="phone" placeholder="555123123" ref={telRef} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-1/5 mx-1">
                            Email:
                            {/* <input type="email" className="grow" placeholder="email" ref={emailRef} /> */}
                            <input type="text" className="grow" placeholder="email" ref={emailRef} />
                        </label>

                        <button className="btn btn-primary w-1/5 mx-1 font-bold" type="submit"> Sol·licitar Pressupost &#10148;</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default UserDataForm;
