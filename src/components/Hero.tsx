import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-carsi-blue-dark via-carsi-blue to-carsi-blue-light text-white py-24 md:py-40 overflow-hidden">
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner-background.png"
          alt="CARSI Training Background"
          fill
          className="object-cover opacity-30"
          priority
          quality={90}
        />
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-carsi-blue-dark/80 via-carsi-blue/70 to-carsi-blue-light/80 z-0"></div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Decorative 3D elements inspired by logo */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-carsi-orange/20 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge with 3D effect */}
          <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6 shadow-3d border border-white/20">
            <span className="text-white font-semibold">Education · Innovation · Certification · Restoration</span>
          </div>

          {/* Main heading with 3D text effect */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
            Professional Restoration
            <span className="block bg-gradient-to-r from-carsi-orange via-carsi-gold to-carsi-orange bg-clip-text text-transparent">
              Training & Certification
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Industry-leading certification courses in water damage restoration, mould remediation,
            structural drying, and more. Trusted by contractors and insurance adjusters nationwide.
          </p>

          {/* 3D Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="group relative bg-gradient-to-br from-carsi-orange to-carsi-gold text-white px-10 py-4 rounded-xl font-bold text-lg shadow-3d-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105 border-b-4 border-carsi-gold/50">
              <span className="relative z-10">Browse All Courses →</span>
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button className="group relative bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-bold text-lg border-2 border-white/50 shadow-3d hover:bg-white hover:text-carsi-blue transition-all transform hover:-translate-y-1 hover:scale-105">
              Start Free Training
            </button>
          </div>

          {/* Trust badges with 3D cards */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { icon: '✓', text: 'IICRC Aligned' },
              { icon: '✓', text: '24/7 Access' },
              { icon: '✓', text: 'Self-Paced Learning' },
              { icon: '✓', text: 'Expert Support' },
            ].map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg shadow-3d border border-white/20"
              >
                <span className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  {badge.icon}
                </span>
                <span className="text-white font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" fillOpacity="0.1"/>
        </svg>
      </div>
    </section>
  )
}
