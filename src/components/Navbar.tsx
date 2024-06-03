import { useState, useEffect } from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setMenuOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white">
      <div className="flex items-center">
        <div className="text-2xl font-bold text-gray-800">
          <span className="text-yellow-600">
            {/* Add your logo here */}
          </span> MASUGA
        </div>
      </div>
      <div className="hidden md:flex space-x-6 text-gray-800">
        <Link href="/work">
          <span className="hover:text-yellow-600 cursor-pointer">Work</span>
        </Link>
        <Link href="/services">
          <span className="hover:text-yellow-600 cursor-pointer">Services</span>
        </Link>
        <Link href="/blog">
          <span className="hover:text-yellow-600 cursor-pointer">Blog</span>
        </Link>
        <div className="relative group">
          <button className="hover:text-yellow-600">
            About Us
          </button>
          <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded">
            <Link href="/about/team">
              <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">Team</span>
            </Link>
            <Link href="/about/company">
              <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">Company</span>
            </Link>
          </div>
        </div>
        <Link href="/contact">
          <span className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-500 cursor-pointer">Contact</span>
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl text-gray-800">
          {menuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-start p-8 space-y-6 text-gray-800 z-50">
          <button onClick={toggleMenu} className="self-end text-2xl">
            <AiOutlineClose />
          </button>
          <Link href="/work">
            <span className="hover:text-yellow-600 cursor-pointer text-2xl">Work</span>
          </Link>
          <Link href="/services">
            <span className="hover:text-yellow-600 cursor-pointer text-2xl">Services</span>
          </Link>
          <Link href="/blog">
            <span className="hover:text-yellow-600 cursor-pointer text-2xl">Blog</span>
          </Link>
          <div className="relative group">
            <button className="hover:text-yellow-600 text-2xl">
              About Us
            </button>
            <div className="ml-4 mt-2 space-y-2">
              <Link href="/about/team">
                <span className="block text-xl text-gray-800 hover:text-yellow-600 cursor-pointer">Team</span>
              </Link>
              <Link href="/about/company">
                <span className="block text-xl text-gray-800 hover:text-yellow-600 cursor-pointer">Company</span>
              </Link>
            </div>
          </div>
          <Link href="/contact">
            <span className="hover:text-yellow-600 cursor-pointer text-2xl">Contact</span>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
