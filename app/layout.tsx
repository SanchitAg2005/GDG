import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "./components/navbar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GDG Study Jam 2025 ",
  description: "Learn, build, and grow with Google Cloud Skills at GDG on Campus Arka Jain University Study Jam 2025",
  icons: {
    icon: "/favicon.png",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
