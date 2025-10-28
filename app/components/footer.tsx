import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">GDG Study Jam 2025</h3>
            <p className="text-gray-300">Learn, build, and grow with Google Cloud Skills</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/labs" className="hover:text-white transition-all duration-300 ease-out">
                  Labs
                </Link>
              </li>
              <li>
                <Link href="/announcements" className="hover:text-white transition-all duration-300 ease-out">
                  Announcements
                </Link>
              </li>
              <li>
                <Link href="/syllabus" className="hover:text-white transition-all duration-300 ease-out">
                  Syllabus
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/help" className="hover:text-white transition-all duration-300 ease-out">
                  Get Help
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-all duration-300 ease-out">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>Made with love by GDG on Campus Arka Jain</p>
        </div>
      </div>
    </footer>
  )
}
