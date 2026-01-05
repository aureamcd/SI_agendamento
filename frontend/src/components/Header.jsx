import { Link } from "react-router-dom";
import {
  Calendar,
  UserPlus,
  LayoutDashboard,
  ClipboardList,
  LogIn,
  LogOut,
  UserCircle,
} from "lucide-react";

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Header() {
    
//   
//   const usuarioLogado = {
//     nome: "Ana Paula",
//     tipo: "Administrativo",
//   };
//   

  const usuarioLogado = null;

  return (
    <header className="bg-gradient-to-r from-blue-600 to-green-600 text-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Logo / Título */}
        <div className="flex items-center gap-3">
          <Calendar className="w-7 h-7" />
          <div>
            <h1 className="text-xl font-bold">
              Sistema de Agendamento UBS
            </h1>
            <p className="text-sm text-blue-100">
              PET-Saúde • Interoperabilidade
            </p>
          </div>
        </div>

        {/* Navegação */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-blue-200"
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Link>

          <button
            onClick={() => scrollToSection("agendamentos")}
            className="flex items-center gap-1 hover:text-blue-200"
          >
            <Calendar className="w-4 h-4" />
            Agendamentos
          </button>

          <button
            onClick={() => scrollToSection("cadastros")}
            className="flex items-center gap-1 hover:text-blue-200"
          >
            <UserPlus className="w-4 h-4" />
            Cadastros
          </button>

          <button
            onClick={() => scrollToSection("listagem")}
            className="flex items-center gap-1 hover:text-blue-200"
          >
            <ClipboardList className="w-4 h-4" />
            Listagem
          </button>

          {/* 🔐 ÁREA DE LOGIN */}
          {!usuarioLogado ? (
            <Link
              to="/login"
              className="flex items-center gap-1 bg-white text-blue-700 px-3 py-1.5 rounded-lg hover:bg-blue-50"
            >
              <LogIn className="w-4 h-4" />
              Entrar
            </Link>
          ) : (
            <div className="flex items-center gap-3 bg-white/10 px-3 py-1.5 rounded-lg">
              <UserCircle className="w-5 h-5" />
              <div className="text-xs leading-tight">
                <p className="font-semibold">{usuarioLogado.nome}</p>
                <p className="text-blue-100">{usuarioLogado.tipo}</p>
              </div>
              <button
                title="Sair"
                className="hover:text-red-300"
                onClick={() => alert("Logout (simulado)")}
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
