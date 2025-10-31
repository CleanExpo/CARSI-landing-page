export function Statistics() {
  const stats = [
    { value: '23+', label: 'Certification Courses' },
    { value: '10,000+', label: 'Trained Professionals' },
    { value: '98%', label: 'Pass Rate' },
    { value: '24/7', label: 'Support Available' },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg md:text-xl text-blue-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
