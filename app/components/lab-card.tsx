import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface LabCardProps {
  id: string
  title: string
  courseCode: string
  description: string
}

export default function LabCard({ id, title, courseCode, description }: LabCardProps) {
  return (
    <div className="bg-surface rounded-2xl shadow-md p-6 card-hover border border-border">
      <div className="mb-4">
        <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
          {courseCode}
        </span>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </div>
      <p className="text-text-secondary mb-6 line-clamp-2">{description}</p>
      <Link href={`/labs/${id}`} className="inline-flex items-center gap-2 button-primary">
        Open Lab
        <ArrowRight size={16} />
      </Link>
    </div>
  )
}
