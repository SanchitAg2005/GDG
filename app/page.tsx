"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, BookOpen } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4285f4] to-[#1967d2] text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <Sparkles size={48} className="text-[#f4b400]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">GDG Study Jam 2025</h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto text-balance">
              Welcome to the GDG on Campus Arka Jain Study Jam 2025 Portal — your hub to learn, build, and grow with
              Google Cloud Skills. Explore labs, tutorials, syllabus, and announcements from our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/labs" className="button-primary bg-white text-[#4285f4] hover:bg-gray-100">
                <BookOpen className="inline mr-2" size={20} />
                Solutions
              </Link>
              <Link href="/announcements" className="button-primary bg-[#0f9d58] hover:bg-[#0d7e47]">
                View Announcements
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud Fundamentals",
                description: "Master the basics of Google Cloud Platform",
                color: "#4285f4",
              },
              {
                title: "Hands-on Labs",
                description: "Build real-world projects with guided tutorials",
                color: "#0f9d58",
              },
              { title: "Expert Guidance", description: "Learn from experienced GDG mentors", color: "#db4437" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-surface rounded-2xl shadow-md p-8 border border-border text-center"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: feature.color }}
                >
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
