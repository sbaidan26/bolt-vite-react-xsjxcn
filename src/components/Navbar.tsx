import { Menu, X, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#003366] fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-white hover:bg-[#004488] px-3 py-2 rounded-md font-medium">Accueil</a>
                <a href="#" className="text-gray-300 hover:bg-[#004488] hover:text-white px-3 py-2 rounded-md font-medium">Formation</a>
                <a href="#" className="text-gray-300 hover:bg-[#004488] hover:text-white px-3 py-2 rounded-md font-medium">Services</a>
                <a href="#" className="text-gray-300 hover:bg-[#004488] hover:text-white px-3 py-2 rounded-md font-medium">À propos</a>
                <a href="#" className="text-gray-300 hover:bg-[#004488] hover:text-white px-3 py-2 rounded-md font-medium">Contact</a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#004488] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Accueil</a>
            <a href="#" className="text-gray-300 hover:bg-[#004488] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Formation</a>
            <a href="#" className="text-gray-300 hover:bg-[#004488] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#" className="text-gray-300 hover:bg-[#004488] hover:text-white block px-3 py-2 rounded-md text-base font-medium">À propos</a>
            <a href="#" className="text-gray-300 hover:bg-[#004488] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}