import Image from 'next/image'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 drop-shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/carsi-logo.png"
                alt="CARSI Training Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-charcoal">CARSI</h1>
              <p className="text-xs text-gray-600">Training & Certification</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#courses" className="text-gray-700 hover:text-carsi-blue font-medium transition-colors">
              Courses
            </a>
            <a href="#about" className="text-gray-700 hover:text-carsi-blue font-medium transition-colors">
              About
            </a>
            <a href="#faq" className="text-gray-700 hover:text-carsi-blue font-medium transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-gray-700 hover:text-carsi-blue font-medium transition-colors">
              Contact
            </a>
            <button className="bg-gradient-to-br from-carsi-blue to-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
