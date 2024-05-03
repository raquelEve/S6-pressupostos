import { createContext, useContext, useRef, useState } from 'react';
import PropTypes from "prop-types";

// 1. Crear el contexto
const UserInfoContext = createContext();

// 2. Función para utilizar el contexto
export function useUserInfoContext() {
    return useContext(UserInfoContext);
}

// 3. Proveedor de contexto
export function UserInfoProvider({ children }) {

    // 4. definicion de los state
    const [name, setName] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");


    // 5. logica
    const updateUserInfo = (newName, newTel, newEmail) => {
        setName(newName);
        setTel(newTel);
        setEmail(newEmail);
        console.log("nom", name);
        console.log("tel", tel);
        console.log("email", email);

    };

    return (
        <UserInfoContext.Provider value={{ name, tel, email, updateUserInfo }}>
            {children}
        </UserInfoContext.Provider>
    );
}


UserInfoProvider.propTypes = {
    children: PropTypes.node,
};
