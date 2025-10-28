import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import labs from "@/data/labs.json"

export async function generateStaticParams() {
  return labs.map((lab) => ({
    id: lab.id,
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const lab = labs.find((l) => l.id === params.id)
  return {
    title: `${lab?.title} | GDG Study Jam 2025`,
    description: lab?.description,
  }
}

export default function LabDetailPage({ params }: { params: { id: string } }) {
  const lab = labs.find((l) => l.id === params.id)

  if (!lab) {
    return (
      <div className="pt-20 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-center text-text-secondary">Lab not found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/labs"
          className="inline-flex items-center gap-2 text-primary hover:text-[#1967d2] transition-all duration-300 ease-out mb-8"
        >
          <ArrowLeft size={20} />
          Back to Labs
        </Link>

        <div className="bg-surface rounded-2xl shadow-md p-8 border border-border">
          <div className="mb-6">
            <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
              {lab.courseCode}
            </span>
            <h1 className="text-4xl font-bold mb-4">{lab.title}</h1>
            <p className="text-text-secondary text-lg">{lab.description}</p>
          </div>

          {/* Video Placeholder */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Tutorial Video</h2>
            <div className="bg-surface-variant rounded-lg aspect-video flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center">
                <p className="text-text-secondary mb-2">YouTube video will be embedded here</p>
                <p className="text-sm text-text-tertiary">Video URL: {lab.video || "To be added"}</p>
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Resources & Solution</h2>
            <div className="bg-surface-variant rounded-lg p-6 border border-border">
              <p className="text-text-secondary mb-4">Resources and solution files will be available here</p>
              <p className="text-sm text-text-tertiary">Resources URL: {lab.resources || "To be added"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
