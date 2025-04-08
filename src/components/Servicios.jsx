/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"
/* eslint-enable no-unused-vars */
import { Gavel, FileText, UserCheck, Scale } from "lucide-react"

const servicios = [
  {
    icon: <Gavel className="w-8 h-8 text-pink-600" />,
    title: "Litigios y representación",
    desc: "Defensa y representación en procesos judiciales y extrajudiciales.",
  },
  {
    icon: <FileText className="w-8 h-8 text-pink-600" />,
    title: "Contratos y documentos",
    desc: "Redacción, análisis y gestión de contratos legales.",
  },
  {
    icon: <UserCheck className="w-8 h-8 text-pink-600" />,
    title: "Consultas personalizadas",
    desc: "Asesoría legal a medida para cada situación individual.",
  },
  {
    icon: <Scale className="w-8 h-8 text-pink-600" />,
    title: "Áreas del derecho",
    desc: "Asesoramiento en derecho civil, laboral, comercial, y más.",
  },
]

export default function Servicios() {
  return (
    <div id="servicios" className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-16">
      <motion.h1
        className="text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0 }}
      >
        Servicios
      </motion.h1>

      <motion.p
        className="max-w-[600px] text-lg text-slate-700 md:text-xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0 }}
      >
        Ofrecemos una amplia gama de servicios legales para satisfacer sus necesidades.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full px-4">
        {servicios.map((servicio, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-xl transition-shadow border"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 + index * 0.2 }}
            whileHover={{ scale: 1.08 }}
          >
            <div className="flex items-center gap-4 mb-4">
              {servicio.icon}
              <h3 className="text-xl font-semibold text-slate-900">{servicio.title}</h3>
            </div>
            <p className="text-slate-600">{servicio.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
