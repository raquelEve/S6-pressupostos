import React from "react";
import { useQuoteListContext } from "../../../contexts/quoteListContext";
// pasmos las variables a imprimir por el objeto quote
const QuoteCard = ({ quote }) => {
    const { services, user, total, id } = quote;
    const { sendQuote } = useQuoteListContext();

    return (
        <div className="card bg-base-200 shadow-xl  my-3 p-6">
            <div className="flex">
                <div className="w-1/3 text-left">
                    <p className="text-xl font-bold">
                        {user.name} - {id}
                    </p>
                    <p>{user.email}</p>
                    <p>{user.tel}</p>
                </div>
                <div className="w-1/3 text-left">
                    <h2 className="text-xl font-bold">Servicios contratados</h2>
                    <ul>
                        {services.map((service, index) => (
                            <li key={id}>
                                {service.title}
                                {service.title === "Web" &&
                                    service.extras && ( // Verificar si es un servicio de Web y si tiene extras
                                        <span>
                                            ({service.extras.pages} páginas,{" "}
                                            {service.extras.languages} lenguajes)
                                        </span>
                                    )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-1/3 text-right">
                    <h2 className="text-xl font-bold">Total</h2>
                    <p className="text-3xl font-bold">
                        {total}
                        <span className="text-base">€</span>
                    </p>
                    <p><button className="btn btn-lg sendButton" onClick={() => sendQuote(id)}>&#128389;</button></p>
                    {/* <p>{quote}</p> */}
                </div>
            </div>
        </div>
    );
};

export default QuoteCard;
