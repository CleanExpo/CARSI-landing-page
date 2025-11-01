import Image from 'next/image'

export function Features() {
  const features = [
    {
      title: 'Industry-Recognized Certifications',
      description: 'IICRC, RIA, and industry-standard certifications recognized across North America',
      iconPath: '/icons/iicrc-training.png',
    },
    {
      title: 'Online & Self-Paced',
      description: 'Learn on your schedule with 24/7 access from any device, anywhere',
      iconPath: '/icons/online-self-paced.png',
    },
    {
      title: 'Expert Instructors',
      description: 'Learn from seasoned restoration professionals with decades of field experience',
      iconPath: '/icons/expert-instructions.png',
    },
    {
      title: 'Comprehensive Training',
      description: 'From water damage to mould remediation - complete certification programs',
      iconPath: '/icons/comprehensive-training.png',
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
              className="text-center p-6 rounded-xl hover:shadow-xl transition-all duration-300 bg-gray-50 hover:bg-white group"
            >
              <div className="relative w-20 h-20 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={feature.iconPath}
                  alt={feature.title}
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-charcoal group-hover:text-carsi-blue transition-colors">
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
