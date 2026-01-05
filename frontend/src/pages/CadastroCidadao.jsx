import { useState } from "react";
import Swal from "sweetalert2";

import { User, IdCard, Phone, MapPin, Calendar, Users } from "lucide-react";

export default function CadastroPaciente() {
  const [formData, setFormData] = useState({
    nome: "",
    nomeMae: "",
    cpf: "",
    cns: "",
    dataNascimento: "",
    sexo: "",
    telefone: "",
    endereco: "",
    municipio: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

 async function handleSubmit(e) {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:8080/pacientes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Erro ao cadastrar paciente");
    }

    // ✅ Sucesso
    await Swal.fire({
      icon: "success",
      title: "Cadastro realizado!",
      text: "Cidadão cadastrado com sucesso no sistema.",
      confirmButtonColor: "#2563eb",
    });

    // Limpa formulário
    setFormData({
      nome: "",
      nomeMae: "",
      cpf: "",
      cns: "",
      dataNascimento: "",
      sexo: "",
      telefone: "",
      endereco: "",
      municipio: "",
    });

  } catch (error) {
    // ❌ Erro
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
          Cadastro de Paciente
        </h1>

        <p className="text-gray-600 mb-8">
          Sistema Piloto de Agendamento e Cadastro da Atenção Básica – UBS
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome Completo *
            </label>
            <input
              type="text"
              name="nome"
              required
              value={formData.nome}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Nome da Mãe */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Users className="inline w-4 h-4 mr-1" />
              Nome da Mãe *
            </label>
            <input
              type="text"
              name="nomeMae"
              required
              value={formData.nomeMae}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* CPF */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <IdCard className="inline w-4 h-4 mr-1" />
              CPF *
            </label>
            <input
              type="text"
              name="cpf"
              required
              value={formData.cpf}
              onChange={handleChange}
              placeholder="000.000.000-00"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* CNS */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cartão SUS (CNS) *
            </label>
            <input
              type="text"
              name="cns"
              required
              value={formData.cns}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Data de nascimento */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Calendar className="inline w-4 h-4 mr-1" />
              Data de Nascimento *
            </label>
            <input
              type="date"
              name="dataNascimento"
              required
              value={formData.dataNascimento}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Sexo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sexo *
            </label>
            <select
              name="sexo"
              required
              value={formData.sexo}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione</option>
              <option value="Feminino">Feminino</option>
              <option value="Masculino">Masculino</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          {/* Telefone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Phone className="inline w-4 h-4 mr-1" />
              Telefone *
            </label>
            <input
              type="tel"
              name="telefone"
              required
              value={formData.telefone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Endereço */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <MapPin className="inline w-4 h-4 mr-1" />
              Endereço *
            </label>
            <input
              type="text"
              name="endereco"
              required
              value={formData.endereco}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Município */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Município *
            </label>
            <input
              type="text"
              name="municipio"
              required
              value={formData.municipio}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Cadastrar Paciente
          </button>
        </form>
      </div>
    </div>
  );
}
