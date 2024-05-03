import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>

            <main className="flex justify-center items-center" id="homeMain">
                <div className="bg-white rounded-2xl border-2  shadow-lg shadow-indigo-500/50 p-6">
                    <h1 className="mb-8 text-4xl text-primary">Frontender:itacademy</h1>
                    <h2 className="mb-8 text-xl text-indigo-400">Benvingut a la nostra plataforma de pressupostos en línia!</h2>
                    <p className="mb-4">
                        A la nostra web, podràs crear fàcilment pressupostos per a les teves necessitats comercials i personals. Amb la nostra interfície intuïtiva i les funcionalitats avançades, podràs generar pressupostos de manera ràpida i precisa.</p>
                    <p className="mb-4">
                        Comença creant un compte gratuït i comença a utilitzar les nostres eines avançades de creació de pressupostos. Personalitza cada detall del teu pressupost amb les opcions de format i disseny disponibles. A més, podràs afegir productes i serveis, establir preus i calcular el cost total amb facilitat.
                    </p>
                    <p className="mb-4">
                        No esperis més! Uneix-te a nosaltres avui mateix i simplifica el procés de creació de pressupostos per al teu negoci o projecte personal.
                    </p>
                    <Link to="/calculadora" className="btn btn-primary mt-8">Començar</Link>
                </div>
            </main>
        </>
    );
}

export default Home;
