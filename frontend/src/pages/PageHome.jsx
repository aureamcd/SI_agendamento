import {
  UserPlus,
  ClipboardList,
  CalendarPlus,
  Search,
  ListChecks,
} from "lucide-react";

import Card from "../components/Card";

export default function PageHome() {
  return (
    <div className="max-w-7xl mx-auto p-8 space-y-12">

      {/* Mensagem de boas-vindas */}
      <section className="bg-white rounded-xl shadow p-6 text-center">
        <h1 className="text-3xl font-bold text-blue-700">
          Bem-vindo ao Sistema de Agendamento UBS
        </h1>
        <p className="mt-2 text-gray-600">
          Sistema piloto desenvolvido no âmbito do PET-Saúde,
          com foco em interoperabilidade e apoio à Atenção Básica.
        </p>
      </section>

      {/* ÁREA DE AGENDAMENTOS */}
      <section id="agendamentos">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Agendamentos
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card
            title="Agendar Consulta"
            description="Realizar um novo agendamento"
            icon={CalendarPlus}
            to="/agendamento"
          />

          <Card
            title="Consultar Agendamento"
            description="Verificar dados de um agendamento"
            icon={Search}
            to="/agendamentos"
          />
        </div>
      </section>

      {/* ÁREA DE CADASTROS */}
      <section id="cadastros">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Cadastros
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card
            title="Cadastro de Cidadão"
            description="Registrar cidadãos atendidos pela UBS"
            icon={UserPlus}
            to="/cadastro/cidadao"
          />

          <Card
            title="Cadastro de Profissional da UBS"
            description="Registrar profissionais de saúde"
            icon={ClipboardList}
            to="/cadastro/profissional"
          />
        </div>
      </section>

      {/* LISTAGEM */}
      <section id="listagem">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Listagem de Agendamentos
        </h2>

        <div className="grid md:grid-cols-1 gap-6">
          
        </div>
      </section>

    </div>
  );
}
