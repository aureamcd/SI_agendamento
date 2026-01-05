import { Users, CalendarCheck } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        Dashboard do Sistema
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-xl p-6 flex items-center gap-4">
          <Users className="w-10 h-10 text-blue-600" />
          <div>
            <p className="text-gray-600">Pacientes Cadastrados</p>
            <p className="text-2xl font-bold">—</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-xl p-6 flex items-center gap-4">
          <CalendarCheck className="w-10 h-10 text-green-600" />
          <div>
            <p className="text-gray-600">Agendamentos Realizados</p>
            <p className="text-2xl font-bold">—</p>
          </div>
        </div>
      </div>
    </div>
  );
}
