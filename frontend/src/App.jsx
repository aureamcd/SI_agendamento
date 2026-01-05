import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import PageHome from "./pages/PageHome";
import CadastroCidadao from "./pages/CadastroCidadao";
import CadastroProfissional from "./pages/CadastroProfissional";
import Agendamento from "./pages/Agendamento";
import Login from "./pages/login";
import ConsultarAgendamentos from "./pages/ConsultarAgendamento";


export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/cadastro/cidadao" element={<CadastroCidadao />} />
          <Route path="/cadastro/profissional" element={<CadastroProfissional />} />
          <Route path="/agendamento" element={<Agendamento />} />
          <Route path="/login" element={<Login />} />
          <Route path="/consultar-agendamentos" element={<ConsultarAgendamentos />} />
          
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
