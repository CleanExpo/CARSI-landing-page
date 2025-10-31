export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Restoration Training
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Comprehensive certification courses in water damage restoration,
            mould remediation, and structural drying
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Browse Courses
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Free Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
