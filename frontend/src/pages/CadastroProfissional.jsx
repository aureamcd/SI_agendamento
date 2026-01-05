import { useState } from "react";
import { User, Briefcase } from "lucide-react";
import Swal from "sweetalert2";

export default function CadastroProfissional() {
  const [profissional, setProfissional] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    tipo: "",
    unidade: "",
    especialidade: "",
    conselho: "",
    curso: "",
    instituicao: "",
    setor: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setProfissional({ ...profissional, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/profissionais", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profissional),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao cadastrar profissional");
      }

      await Swal.fire({
        icon: "success",
        title: "Cadastro realizado!",
        text: "Profissional cadastrado com sucesso.",
        confirmButtonColor: "#16a34a",
      });

      setProfissional({
        nome: "",
        cpf: "",
        telefone: "",
        tipo: "",
        unidade: "",
        especialidade: "",
        conselho: "",
        curso: "",
        instituicao: "",
        setor: "",
      });

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erro no cadastro",
        text: error.message,
        confirmButtonColor: "#dc2626",
      });
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start py-10">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 flex items-center gap-2">
          <User className="w-7 h-7" />
          Cadastro de Profissional da UBS
        </h1>

        <p className="text-gray-600 mb-8">
          Sistema Piloto de Cadastro de Profissionais da Atenção Básica
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Nome completo *
            </label>
            <input
              name="nome"
              value={profissional.nome}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* CPF */}
          <div>
            <label className="block text-sm font-medium mb-1">
              CPF *
            </label>
            <input
              name="cpf"
              value={profissional.cpf}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Telefone */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Telefone *
            </label>
            <input
              name="telefone"
              value={profissional.telefone}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Tipo */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Tipo de profissional *
            </label>
            <select
              name="tipo"
              value={profissional.tipo}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione</option>
              <option value="Saude">Profissional de Saúde</option>
              <option value="Estudante">Estudante</option>
              <option value="Administrativo">Administrativo</option>
            </select>
          </div>

          {/* Saúde */}
          {profissional.tipo === "Saude" && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Especialidade *
                </label>
                <input
                  name="especialidade"
                  value={profissional.especialidade}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Conselho profissional *
                </label>
                <input
                  name="conselho"
                  value={profissional.conselho}
                  onChange={handleChange}
                  required
                  placeholder="CRM, COREN, CRO..."
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}

          {/* Estudante */}
          {profissional.tipo === "Estudante" && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Curso *
                </label>
                <input
                  name="curso"
                  value={profissional.curso}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Instituição *
                </label>
                <input
                  name="instituicao"
                  value={profissional.instituicao}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}

          {/* Administrativo */}
          {profissional.tipo === "Administrativo" && (
            <div>
              <label className="block text-sm font-medium mb-1">
                Setor *
              </label>
              <input
                name="setor"
                value={profissional.setor}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          {/* Unidade */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Unidade de Saúde *
            </label>
            <input
              name="unidade"
              value={profissional.unidade}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Cadastrar Profissional
          </button>
        </form>
      </div>
    </div>
  );
}
