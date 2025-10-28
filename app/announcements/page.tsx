import AnnouncementCard from "../components/announcement-card"
import announcements from "@/data/announcements.json"

export const metadata = {
  title: "Announcements | GDG Study Jam 2025",
  description: "Latest announcements for the GDG Study Jam 2025",
}

export default function AnnouncementsPage() {
  const sortedAnnouncements = [...announcements].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Announcements</h1>
          <p className="text-text-secondary text-lg">Stay updated with the latest news and updates</p>
        </div>

        <div className="space-y-6">
          {sortedAnnouncements.map((announcement, index) => (
            <AnnouncementCard
              key={index}
              date={announcement.date}
              title={announcement.title}
              message={announcement.message}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
