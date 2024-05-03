import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import CalculadoraPage from "../components/pages/CalculadoraPage";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calculadora" element={<CalculadoraPage />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;
