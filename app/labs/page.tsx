"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import labs from "@/data/labs.json"

export default function LabsPage() {
  const [expandedLab, setExpandedLab] = useState<string | null>(null)
  const [selectedTopic, setSelectedTopic] = useState<{ labId: string; topicId: string } | null>(null)

  return (
    <div className="min-h-screen bg-background py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Study Jam Labs</h1>
          <p className="text-text-secondary text-lg">
            Explore comprehensive labs with video tutorials for each topic. Click on a lab to expand and view topics.
          </p>
        </div>

        {/* Labs Grid */}
        <div className="space-y-6">
          {labs.map((lab) => (
            <motion.div
              key={lab.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-surface rounded-2xl border border-border shadow-md overflow-hidden"
            >
              {/* Lab Header - Clickable */}
              <button
                onClick={() => setExpandedLab(expandedLab === lab.id ? null : lab.id)}
                className="w-full px-6 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="text-left">
                  <span className="inline-block bg-[#4285f4] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                    {lab.courseCode}
                  </span>
                  <h2 className="text-2xl font-bold text-foreground">{lab.title}</h2>
                </div>
                <motion.div animate={{ rotate: expandedLab === lab.id ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown size={24} className="text-[#4285f4]" />
                </motion.div>
              </button>

              {/* Expanded Content - Topics */}
              {expandedLab === lab.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-border px-6 py-6 bg-gray-50"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Topics List */}
                    <div className="lg:col-span-1">
                      <h3 className="text-lg font-bold mb-4 text-foreground">Topics</h3>
                      <div className="space-y-2">
                        {lab.topics.map((topic) => (
                          <button
                            key={topic.id}
                            onClick={() => setSelectedTopic({ labId: lab.id, topicId: topic.id })}
                            className={`w-full text-left px-4 py-3 rounded-lg transition-all ${selectedTopic?.labId === lab.id && selectedTopic?.topicId === topic.id
                                ? "bg-[#4285f4] text-white font-semibold"
                                : "bg-white border border-border hover:border-[#4285f4] hover:bg-blue-50"
                              }`}
                          >
                            {topic.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Video Player */}
                    <div className="lg:col-span-2">
                      {selectedTopic?.labId === lab.id ? (
                        <div className="space-y-4">
                          <h3 className="text-lg font-bold text-foreground">
                            {lab.topics.find((t) => t.id === selectedTopic.topicId)?.name}
                          </h3>
                          <div
                            className="relative w-full bg-black rounded-xl overflow-hidden"
                            style={{ paddingBottom: "56.25%" }}
                          >
                            <iframe
                              className="absolute top-0 left-0 w-full h-full"
                              src={lab.topics.find((t) => t.id === selectedTopic.topicId)?.video}
                              title="Lab Video"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-96 bg-gray-100 rounded-xl">
                          <p className="text-text-secondary text-center">
                            Select a topic from the list to view the video tutorial
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
