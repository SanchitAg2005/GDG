"use client"

import { useEffect, useState } from "react"
import SyllabusCard from "../components/syllabus-card"
import syllabusData from "@/data/syllabus.json"
import { motion, AnimatePresence } from "framer-motion"

export default function SyllabusPage() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const hasSeenToast = localStorage.getItem("syllabus-toast-seen")
    if (!hasSeenToast) {
      setShowToast(true)
      localStorage.setItem("syllabus-toast-seen", "true")
      const timer = setTimeout(() => setShowToast(false), 4000)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Study Syllabus</h1>
          <p className="text-text-secondary text-lg">Explore the topics covered in each lab</p>
        </div>

        <div className="space-y-4">
          {syllabusData.map((item, index) => (
            <SyllabusCard key={index} lab={item.lab} topics={item.topics} />
          ))}
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-4 bg-primary text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2"
          >
            <span>💡</span>
            <span>Click a lab card to view its topics!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
