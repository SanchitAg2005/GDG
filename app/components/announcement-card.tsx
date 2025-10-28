import { Calendar } from "lucide-react"

interface AnnouncementCardProps {
  date: string
  title: string
  message: string
}

export default function AnnouncementCard({ date, title, message }: AnnouncementCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="bg-surface rounded-2xl shadow-md p-6 border border-border hover:shadow-lg transition-all duration-300 ease-out">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Calendar className="text-primary" size={24} />
        </div>
        <div className="flex-1">
          <p className="text-sm text-text-tertiary font-medium">{formattedDate}</p>
          <h3 className="text-lg font-bold text-foreground mt-1">{title}</h3>
          <p className="text-text-secondary mt-2">{message}</p>
        </div>
      </div>
    </div>
  )
}
