import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import CheckCardContainer from "./components/CardContainer/CheckCardContainer";
import { ServicesDataProvider } from "./providers/servicesDataContext";

function App() {
  return (
    <>
      <h2 className="">Forntender.itacademy</h2>
      <div className="jumbotron mb-4">
        <h1 className="text-6xl">Aconsegueix la millor qualitat</h1>
      </div>
      <ServicesDataProvider>
        <CheckCardContainer />
      </ServicesDataProvider>
    </>
  );
}

export default App;
