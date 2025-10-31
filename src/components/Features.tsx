export function Features() {
  const features = [
    {
      title: 'Industry-Recognized Certifications',
      description: 'IICRC, RIA, and industry-standard certifications recognized across North America',
      icon: '🎓',
    },
    {
      title: 'Online & Self-Paced',
      description: 'Learn on your schedule with 24/7 access from any device, anywhere',
      icon: '💻',
    },
    {
      title: 'Expert Instructors',
      description: 'Learn from seasoned restoration professionals with decades of field experience',
      icon: '👨‍🏫',
    },
    {
      title: 'Comprehensive Training',
      description: 'From water damage to mould remediation - complete certification programs',
      icon: '📚',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Why Choose CARSI Training?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional restoration education trusted by contractors and adjusters
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:shadow-xl transition-shadow duration-300 bg-gray-50"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
