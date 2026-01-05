import { useEffect, useState } from "react";
import {
  Calendar,
  User,
  Stethoscope,
  Search,
  ClipboardList,
} from "lucide-react";

export default function ConsultarAgendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [filtros, setFiltros] = useState({
    cpfPaciente: "",
    especialidade: "",
    data: "",
  });

  useEffect(() => {
    buscarAgendamentos();
  }, []);

  async function buscarAgendamentos() {
    try {
      const response = await fetch("http://localhost:8080/agendamentos");
      const data = await response.json();
      setAgendamentos(data);
    } catch (error) {
      console.error("Erro ao buscar agendamentos", error);
    }
  }

  function handleFiltroChange(e) {
    const { name, value } = e.target;
    setFiltros({ ...filtros, [name]: value });
  }

  const agendamentosFiltrados = agendamentos.filter((a) => {
    return (
      (filtros.cpfPaciente === "" ||
        a.cpfPaciente.includes(filtros.cpfPaciente)) &&
      (filtros.especialidade === "" ||
        a.especialidade === filtros.especialidade) &&
      (filtros.data === "" || a.data === filtros.data)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 flex items-center gap-2">
          <ClipboardList className="w-7 h-7" />
          Consultar Agendamentos
        </h1>

        {/* FILTROS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="text-sm font-medium block mb-1">
              <User className="inline w-4 h-4 mr-1" />
              CPF do Paciente
            </label>
            <input
              name="cpfPaciente"
              value={filtros.cpfPaciente}
              onChange={handleFiltroChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">
              <Stethoscope className="inline w-4 h-4 mr-1" />
              Especialidade
            </label>
            <select
              name="especialidade"
              value={filtros.especialidade}
              onChange={handleFiltroChange}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">Todas</option>
              <option value="Clínico Geral">Clínico Geral</option>
              <option value="Pediatria">Pediatria</option>
              <option value="Ginecologia">Ginecologia</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">
              <Calendar className="inline w-4 h-4 mr-1" />
              Data
            </label>
            <input
              type="date"
              name="data"
              value={filtros.data}
              onChange={handleFiltroChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={buscarAgendamentos}
              className="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700"
            >
              <Search className="w-4 h-4" />
              Atualizar
            </button>
          </div>
        </div>

        {/* TABELA */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 text-left">CPF</th>
                <th className="p-3 text-left">Especialidade</th>
                <th className="p-3 text-left">Profissional</th>
                <th className="p-3 text-left">Data</th>
                <th className="p-3 text-left">Horário</th>
                <th className="p-3 text-left">Atendente</th>
              </tr>
            </thead>
            <tbody>
              {agendamentosFiltrados.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center p-6 text-gray-500"
                  >
                    Nenhum agendamento encontrado
                  </td>
                </tr>
              )}

              {agendamentosFiltrados.map((a) => (
                <tr
                  key={a.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-3">{a.cpfPaciente}</td>
                  <td className="p-3">{a.especialidade}</td>
                  <td className="p-3">{a.profissionalNome}</td>
                  <td className="p-3">{a.data}</td>
                  <td className="p-3">{a.horario}</td>
                  <td className="p-3">{a.atendenteNome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
