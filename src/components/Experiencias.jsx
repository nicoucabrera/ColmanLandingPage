import React from 'react'
import { ConfigProvider, Timeline } from 'antd'
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"
/* eslint-enable no-unused-vars */

const timelineItems = [
  {
    children: 'Prácticas profesionales en estudio jurídico (2020)',
    color: 'pink',
  },
  {
    children: 'Asistente legal en causas civiles y laborales (2021)',
    color: 'pink',
  },
  {
    children: 'Especialización en redacción de contratos legales (2022)',
    color: 'pink',
  },
  {
    children: 'Atención personalizada a clientes y asesoría integral (2023 - Actualidad)',
    color: 'pink',
  },
]

export default function Experiencias() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Timeline: {
            fontSize: 18,
            tailColor: '#d63384',
            dotSize: 20,
            dotBorderWidth: 4,
          },
        },
      }}
    >
      <div
        id="Experiencias"
        className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-16"
      >
        <motion.h1
          className="text-3xl font-bold tracking-tighter text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experiencias
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <Timeline
            items={timelineItems.map((item, index) => ({
              ...item,
              children: (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                >
                  {item.children}
                </motion.div>
              ),
            }))}
          />
        </motion.div>
      </div>
    </ConfigProvider>
  )
}
