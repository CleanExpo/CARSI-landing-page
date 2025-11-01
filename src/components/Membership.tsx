import Image from 'next/image'

export function Membership() {
  const benefits = [
    {
      icon: '✓',
      title: 'Exclusive Course Access',
      description: 'Priority enrollment and early access to new certification programs',
    },
    {
      icon: '✓',
      title: 'Member Discounts',
      description: 'Save up to 30% on all CARSI training courses and materials',
    },
    {
      icon: '✓',
      title: 'Networking Opportunities',
      description: 'Connect with restoration professionals across North America',
    },
    {
      icon: '✓',
      title: 'Industry Resources',
      description: 'Access to technical documents, templates, and best practices',
    },
    {
      icon: '✓',
      title: 'Continuing Education',
      description: 'Free CEU credits to maintain your professional certifications',
    },
    {
      icon: '✓',
      title: 'Expert Support',
      description: '24/7 technical support and consultation from industry experts',
    },
  ]

  const membershipTiers = [
    {
      name: 'Individual',
      price: '$299',
      period: '/year',
      description: 'Perfect for independent contractors and technicians',
      features: [
        'All course discounts',
        'Digital certificate',
        'Email support',
        'Member directory listing',
        'Monthly webinars',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/year',
      description: 'Ideal for growing restoration businesses',
      features: [
        'Everything in Individual',
        'Up to 5 team members',
        'Priority support',
        'Advanced training materials',
        'Quarterly workshops',
        'Marketing resources',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with multiple locations',
      features: [
        'Everything in Professional',
        'Unlimited team members',
        'Dedicated account manager',
        'Custom training programs',
        'On-site training options',
        'White-label materials',
      ],
      highlighted: false,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-carsi-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-carsi-orange/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-carsi-blue to-carsi-blue-light text-white px-6 py-2 rounded-full mb-4 text-sm font-semibold shadow-3d">
            CARSI Membership
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-charcoal">
            Join the CARSI Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Become a member and unlock exclusive benefits, discounts, and resources to grow your restoration business
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-3d border border-gray-100 hover:shadow-3d-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">{benefit.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-charcoal mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Membership Tiers */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-charcoal">Choose Your Membership</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 ${
                  tier.highlighted
                    ? 'border-4 border-carsi-blue shadow-3d-lg scale-105'
                    : 'border-2 border-gray-200 shadow-3d'
                } hover:shadow-3d-lg transition-all duration-300`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-carsi-orange to-carsi-gold text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-charcoal mb-2">{tier.name}</h4>
                  <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl font-bold bg-gradient-to-r from-carsi-blue to-carsi-blue-light bg-clip-text text-transparent">
                      {tier.price}
                    </span>
                    <span className="text-gray-500 mb-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-xl font-bold text-lg shadow-3d transition-all transform hover:-translate-y-1 ${
                    tier.highlighted
                      ? 'bg-gradient-to-r from-carsi-orange to-carsi-gold text-white hover:shadow-2xl'
                      : 'bg-gradient-to-r from-carsi-blue to-carsi-blue-light text-white hover:from-carsi-blue-dark hover:to-carsi-blue'
                  }`}
                >
                  {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-carsi-blue-dark to-carsi-blue rounded-2xl p-8 md:p-12 text-center shadow-3d-lg">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Elevate Your Career?
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of restoration professionals who trust CARSI for their certification and training needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-carsi-orange to-carsi-gold text-white px-10 py-4 rounded-xl font-bold text-lg shadow-3d-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                Become a Member →
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-carsi-blue shadow-3d transition-all transform hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
