import { useState } from "react";
import { User, Lock, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    nomeCompleto: "",
    CPF: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // 🔐 SIMULAÇÃO DE LOGIN (piloto)
    if (login.nomeCompleto && login.CPF) {
      // aqui futuramente vem o backend
      alert("Login realizado com sucesso!");

      // redireciona para home/dashboard
      navigate("/");
    } else {
      alert("Nome completo ou CPF inválidos");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        
        {/* Título */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-blue-700 flex items-center justify-center gap-2">
            <LogIn className="w-6 h-6" />
            Acesso ao Sistema
          </h1>
          <p className="text-gray-600 mt-1 text-sm">
            Sistema de Agendamento da UBS
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label className="block text-sm font-medium mb-1">
              <User className="inline w-4 h-4 mr-1" />
              Nome Completo
            </label>
            <input
              type="text"
              name="nomeCompleto"
              value={login.nomeCompleto}
              onChange={handleChange}
              required
              placeholder="Nome completo"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              <Lock className="inline w-4 h-4 mr-1" />
              CPF
            </label>
            <input
              type="text"
              name="CPF"
              value={login.CPF}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            <LogIn className="w-5 h-5" />
            Entrar
          </button>
        </form>

        {/* Rodapé */}
        <p className="text-xs text-gray-500 mt-6 text-center">
          Acesso restrito a profissionais autorizados da UBS
        </p>
      </div>
    </div>
  );
}
