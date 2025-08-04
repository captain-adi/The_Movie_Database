import { Card } from "@/components/ui/card"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#001F3F] to-[#002B56] text-white py-10 px-6">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 container ">
        
        {/* Left Section */}
        <div className="flex flex-col items-start">
          {/* Logo */}
         <img src="./public/footerLogo.svg" alt="The Movie Database (TMDB)" width="130" height="94" />
          {/* Greeting */}
          <Card className="mt-4 px-4 py-2 bg-white text-blue-600 font-semibold">
            Hi captainAdi!
          </Card>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-2">THE BASICS</h4>
            <ul className="space-y-1">
              <li>About TMDB</li>
              <li>Contact Us</li>
              <li>Support Forums</li>
              <li>API Documentation</li>
              <li>System Status</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">GET INVOLVED</h4>
            <ul className="space-y-1">
              <li>Contribution Bible</li>
              <li>Add New Movie</li>
              <li>Add New TV Show</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">COMMUNITY</h4>
            <ul className="space-y-1">
              <li>Guidelines</li>
              <li>Discussions</li>
              <li>Leaderboard</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">LEGAL</h4>
            <ul className="space-y-1">
              <li>Terms of Use</li>
              <li>API Terms of Use</li>
              <li>Privacy Policy</li>
              <li>DMCA Policy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-400 mt-8">
        Build 27e9c23 (9064)
      </div>
    </footer>
  )
}
