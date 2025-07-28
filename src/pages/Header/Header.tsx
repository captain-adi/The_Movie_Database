import { Plus, Search } from "lucide-react";

const Header = () => {
  return (
      <div className="bg-[#032541] ">
    <header className=" text-white flex items-center justify-between px-15 py-5 shadow container mx-auto">
        {/* Left side: Logo + Nav */}
        <div className="flex  items-center space-x-6">
          {/* TMDB Logo */}
          <div className="flex items-center space-x-1">
            <span className="text-[#90cea1] font-bold text-lg">TMDB</span>
            <span className="w-5 h-5 bg-[#01b4e4] rounded-md"></span>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-5 font-semibold text-sm">
            <a href="#" className="hover:text-[#01b4e4]">
              Movies
            </a>
            <a href="#" className="hover:text-[#01b4e4]">
              TV Shows
            </a>
            <a href="#" className="hover:text-[#01b4e4]">
              People
            </a>
            <a href="#" className="hover:text-[#01b4e4]">
              More
            </a>
          </nav>
        </div>

        {/* Right side: Icons and Auth */}
        <div className="flex items-center space-x-5">
          <Plus className="cursor-pointer hover:text-[#01b4e4]" />

          {/* Language Selector */}
          <button className="border px-2 py-0.5 rounded text-sm font-semibold hover:border-[#01b4e4]">
            EN
          </button>

          {/* Auth Links */}
          <div className="flex space-x-3 text-sm font-semibold">
            <a href="#" className="hover:text-[#01b4e4]">
              Login
            </a>
            <a href="#" className="hover:text-[#01b4e4]">
              Join TMDB
            </a>
          </div>

          {/* Search Icon */}
          <Search className="cursor-pointer hover:text-[#01b4e4]" />
        </div>
    </header>
      </div>
  );
};

export default Header;
