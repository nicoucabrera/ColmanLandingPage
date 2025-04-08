/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"
/* eslint-enable no-unused-vars */
import React from 'react'

export default function Hero() {
    return (
        <motion.div
            id="inicio"
            className="relative flex flex-col items-center justify-center h-screen text-center px-4 "
        >
            <motion.span
                className="text-xl text-shadow-gray-900 text-shadow-md uppercase tracking-widest text-pink-600 font-bold mb-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                Colman Lucrecia Belén - Abogada
            </motion.span>

            <motion.h1
                className="text-3xl font-bold tracking-tighter text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                Experiencia legal a su servicio
            </motion.h1>

            <motion.p
                className="max-w-[600px] text-lg text-black md:text-xl mt-4 text-shadow-gray-50 text-shadow-md font-bold"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                Ofreciendo asesoramiento jurídico profesional y soluciones legales personalizadas para proteger sus
                derechos e intereses.
            </motion.p>
        </motion.div>
    )
}
