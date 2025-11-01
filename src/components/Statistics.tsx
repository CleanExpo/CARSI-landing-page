export function Statistics() {
  const stats = [
    { value: '23+', label: 'Certification Courses', icon: '📚' },
    { value: '10,000+', label: 'Trained Professionals', icon: '👥' },
    { value: '98%', label: 'Pass Rate', icon: '✓' },
    { value: '24/7', label: 'Support Available', icon: '🌐' },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-carsi-blue-dark via-carsi-blue to-carsi-blue-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-carsi-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-3d-lg border border-white/20 transform hover:scale-105 transition-all hover:bg-white/20"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-carsi-orange bg-clip-text text-transparent mb-2 drop-shadow-lg">
                {stat.value}
              </div>
              <div className="text-lg md:text-xl text-white font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
