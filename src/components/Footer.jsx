import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <img src="/path-to-logo.png" alt="Masuga Logo" className="w-8 h-8 mr-2" />
              <span className="text-2xl font-bold">MASUGA</span>
            </div>
            <p>© 2024 Masuga</p>
            <p>Digital strategy & web design in <Link href="https://www.google.com/maps/place/Grand+Rapids,+MI"><p className="text-yellow-400 underline">Grand Rapids, MI</p></Link></p>
            <p><Link href="https://www.linkedin.com/company/masuga"><p className="text-white underline">LinkedIn</p></Link></p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-center md:text-left">
            <div>
              <h4 className="font-bold mb-2">Services</h4>
              <ul>
                <li><Link href="/craft-cms-experts" className="text-white hover:text-yellow-400">Craft CMS Experts</Link></li>
                <li><Link href="/expertise" className="text-white hover:text-yellow-400">Expertise</Link></li>
                <li><Link href="/strategy-support" className="text-white hover:text-yellow-400">Strategy & Support</Link></li>
                <li><Link href="/testimonials" className="text-white hover:text-yellow-400">Testimonials</Link></li>
                <li><Link href="/careers" className="text-white hover:text-yellow-400">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Company</h4>
              <ul>
                <li><Link href="/work" className="text-white hover:text-yellow-400">Work</Link></li>
                <li><Link href="/services" className="text-white hover:text-yellow-400">Services</Link></li>
                <li><Link href="/blog" className="text-white hover:text-yellow-400">Blog</Link></li>
                <li><Link href="/about" className="text-white hover:text-yellow-400">About Us</Link></li>
                <li><Link href="/privacy" className="text-white hover:text-yellow-400">Privacy</Link></li>
                <li><Link href="/contact" className="text-white hover:text-yellow-400">Contact us today!</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
