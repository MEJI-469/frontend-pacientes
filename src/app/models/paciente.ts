export interface HistorialMedico {
  descripcion: string;
  fecha: string; // tipo ISO-8601, ej: "2025-06-13"
}

export interface Paciente {
  id?: string;
  nombre: string;
  edad: number;
  cedula: string;
  telefono: string;
  direccion: string;
  historiales?: HistorialMedico[];
}
