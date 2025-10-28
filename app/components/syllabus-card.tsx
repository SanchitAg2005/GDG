"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

interface SyllabusCardProps {
  lab: string
  topics: string[]
}

export default function SyllabusCard({ lab, topics }: SyllabusCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-surface rounded-2xl shadow-md border border-border overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-surface-variant transition-all duration-300 ease-out"
      >
        <h3 className="text-lg font-bold text-foreground text-left">{lab}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="text-primary" size={24} />
        </motion.div>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 py-4 bg-surface-variant border-t border-border">
          <ul className="space-y-2">
            {topics.map((topic, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span className="text-foreground">{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}
