import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    allowedHosts: ["si-agendamento.onrender.com"],
  },

  preview: {
    allowedHosts: ["si-agendamento.onrender.com"],
  },
});