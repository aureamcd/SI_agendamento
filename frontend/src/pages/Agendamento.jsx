import { useState } from "react";
import { Calendar, Clock, User, Stethoscope, Briefcase } from "lucide-react";
import Swal from "sweetalert2";

export default function Agendamento() {
  const atendenteLogado = {
    id: 10,
    nome: "Ana Paula - Recepção UBS Centro",
  };

  const [dados, setDados] = useState({
    cpfPaciente: "",
    especialidade: "",
    profissionalId: "",
    data: "",
    horario: "",
    atendenteId: atendenteLogado.id,
  });

  const profissionais = [
    { id: 1, nome: "Dr. João Silva", especialidade: "Clínico Geral" },
    { id: 2, nome: "Dra. Maria Santos", especialidade: "Pediatria" },
    { id: 3, nome: "Dr. Carlos Lima", especialidade: "Ginecologia" },
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/agendamentos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao realizar agendamento");
      }

      await Swal.fire({
        icon: "success",
        title: "Agendamento realizado",
        text: "Consulta registrada com sucesso.",
        confirmButtonColor: "#2563eb",
      });

      setDados({
        cpfPaciente: "",
        especialidade: "",
        profissionalId: "",
        data: "",
        horario: "",
        atendenteId: atendenteLogado.id,
      });

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erro no agendamento",
        text: error.message,
        confirmButtonColor: "#dc2626",
      });
    }
  }

  const profissionaisFiltrados = profissionais.filter(
    (p) => p.especialidade === dados.especialidade
  );

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 flex items-center gap-2">
          <Calendar className="w-7 h-7" />
          Agendamento de Consulta
        </h1>

        {/* ATENDENTE */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg flex items-center gap-2 text-blue-700">
          <Briefcase className="w-5 h-5" />
          <strong>Atendente:</strong> {atendenteLogado.nome}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* CPF */}
          <div>
            <label className="block text-sm font-medium mb-1">
              <User className="inline w-4 h-4 mr-1" />
              CPF do Paciente *
            </label>
            <input
              name="cpfPaciente"
              value={dados.cpfPaciente}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Especialidade */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Especialidade *
            </label>
            <select
              name="especialidade"
              value={dados.especialidade}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione</option>
              <option value="Clínico Geral">Clínico Geral</option>
              <option value="Pediatria">Pediatria</option>
              <option value="Ginecologia">Ginecologia</option>
            </select>
          </div>

          {/* Profissional */}
          {dados.especialidade && (
            <div>
              <label className="block text-sm font-medium mb-1">
                <Stethoscope className="inline w-4 h-4 mr-1" />
                Profissional *
              </label>
              <select
                name="profissionalId"
                value={dados.profissionalId}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Selecione</option>
                {profissionaisFiltrados.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.nome}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Data */}
          <div>
            <label className="block text-sm font-medium mb-1">Data *</label>
            <input
              type="date"
              name="data"
              value={dados.data}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Horário */}
          <div>
            <label className="block text-sm font-medium mb-1">
              <Clock className="inline w-4 h-4 mr-1" />
              Horário *
            </label>
            <input
              type="time"
              name="horario"
              value={dados.horario}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
            Confirmar Agendamento
          </button>
        </form>
      </div>
    </div>
  );
}
