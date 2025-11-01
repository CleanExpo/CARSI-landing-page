import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Statistics } from '@/components/Statistics'
import { CourseCarousel } from '@/components/CourseCarousel'
import { Membership } from '@/components/Membership'
import { FAQ } from '@/components/FAQ'
import { coursePageSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'
import type { Course } from '@/types'
import Image from 'next/image'

const courses: Course[] = [
  {
    id: 'training-image',
    title: 'CARSI Training',
    description: 'Comprehensive restoration training programs',
    imagePath: '/images/courses/CARSI Training Image.png',
    alt: 'CARSI Training Overview',
  },
  {
    id: 'carpet-cleaning-basic',
    title: 'Carpet Cleaning Basic Course',
    description: 'Learn fundamental carpet cleaning and maintenance techniques',
    imagePath: '/images/courses/CARSI Carpet Cleaning Basic Course.png',
    alt: 'CARSI Carpet Cleaning Basic Course',
  },
  {
    id: 'donning-doffing',
    title: 'Donning and Doffing Training Course',
    description: 'Safety training for proper PPE usage',
    imagePath: '/images/courses/CARSI Donning and Doffing Training Course.png',
    alt: 'CARSI Donning and Doffing Training Course',
  },
  {
    id: 'free-courses',
    title: 'Free Courses',
    description: 'Access our complimentary training materials',
    imagePath: '/images/courses/CARSI Free Courses.png',
    alt: 'CARSI Free Courses',
  },
  {
    id: 'business-framework',
    title: 'Fundamental Business Framework',
    description: 'Build a successful restoration business',
    imagePath: '/images/courses/CARSI Fundamental Business Framework.png',
    alt: 'CARSI Fundamental Business Framework',
  },
  {
    id: 'insurance-adjusters',
    title: 'Insurance Adjusters and their Roles',
    description: 'Understanding the insurance claims process',
    imagePath: '/images/courses/CARSI Insurance Adjusters and their Roles.png',
    alt: 'CARSI Insurance Adjusters and their Roles',
  },
  {
    id: 'advanced-structural-drying',
    title: 'Introduction to Advanced Applied Structural Drying',
    description: 'Advanced techniques for structural drying',
    imagePath: '/images/courses/CARSI Introduction to Advanced Applied Structural Drying.png',
    alt: 'CARSI Introduction to Advanced Applied Structural Drying',
  },
  {
    id: 'air-quality-fundamentals',
    title: 'Introduction to Air Quality Fundamentals',
    description: 'Essential air quality monitoring principles',
    imagePath: '/images/courses/CARSI Introduction to Air Quality Fundamentals.png',
    alt: 'CARSI Introduction to Air Quality Fundamentals',
  },
  {
    id: 'microbial-remediation',
    title: 'Introduction to Applied Microbial Remediation',
    description: 'Microbial contamination assessment and remediation',
    imagePath: '/images/courses/CARSI Introduction to Applied Microbial Remediation.png',
    alt: 'CARSI Introduction to Applied Microbial Remediation',
  },
  {
    id: 'structural-drying',
    title: 'Introduction to Applied Structural Drying',
    description: 'Core structural drying principles and practices',
    imagePath: '/images/courses/CARSI Introduction to Applied Structural Drying.png',
    alt: 'CARSI Introduction to Applied Structural Drying',
  },
  {
    id: 'asbestos',
    title: 'Introduction to Asbestos',
    description: 'Asbestos identification and safety protocols',
    imagePath: '/images/courses/CARSI Introduction to Asbestos.png',
    alt: 'CARSI Introduction to Asbestos',
  },
  {
    id: 'carpet-cleaning-drying',
    title: 'Introduction to Basic Carpet Cleaning and Drying',
    description: 'Foundational carpet restoration techniques',
    imagePath: '/images/courses/CARSI Introduction to Basic Carpet Cleaning and Drying.png',
    alt: 'CARSI Introduction to Basic Carpet Cleaning and Drying',
  },
  {
    id: 'forensic-investigations',
    title: 'Introduction to Forensic Investigations for Water Losses',
    description: 'Water loss investigation methodologies',
    imagePath: '/images/courses/CARSI Introduction to Forensic Investigations for Water Losses.png',
    alt: 'CARSI Introduction to Forensic Investigations for Water Losses',
  },
  {
    id: 'infrared-thermography',
    title: 'Introduction to Infrared Thermography for Drying',
    description: 'Using thermal imaging for moisture detection',
    imagePath: '/images/courses/CARSI Introduction to Infrared Thermography for Drying.png',
    alt: 'CARSI Introduction to Infrared Thermography for Drying',
  },
  {
    id: 'monitoring-air-quality',
    title: 'Introduction to Monitoring Air Quality on the Job Site',
    description: 'Practical air quality monitoring procedures',
    imagePath: '/images/courses/CARSI Introduction to Monitoring Air Quality on the Job Site.png',
    alt: 'CARSI Introduction to Monitoring Air Quality on the Job Site',
  },
  {
    id: 'mould-identification',
    title: 'Introduction to Mould Identification and Remediation',
    description: 'Comprehensive mould assessment and remediation',
    imagePath: '/images/courses/CARSI Introduction to Mould Identification and Remediation.png',
    alt: 'CARSI Introduction to Mould Identification and Remediation',
  },
  {
    id: 'safety-procedures',
    title: 'Introduction to Safety Procedures for Water Damage Work',
    description: 'Essential safety protocols for restoration work',
    imagePath: '/images/courses/CARSI Introduction to Safety Procedures for Water Damage Work.png',
    alt: 'CARSI Introduction to Safety Procedures for Water Damage Work',
  },
  {
    id: 'commercial-water-damage',
    title: 'Introduction to Water Damage in Commercial Buildings',
    description: 'Large-scale commercial restoration projects',
    imagePath: '/images/courses/CARSI Introduction to Water Damage in Commercial Buildings.png',
    alt: 'CARSI Introduction to Water Damage in Commercial Buildings',
  },
  {
    id: 'water-damage-restoration',
    title: 'Introduction to Water Damage Restoration',
    description: 'Fundamentals of water damage restoration',
    imagePath: '/images/courses/CARSI Introduction to Water Damage Restoration.png',
    alt: 'CARSI Introduction to Water Damage Restoration',
  },
  {
    id: 'level-1-mould',
    title: 'Level 1 Mould Remediation',
    description: 'Basic mould remediation certification',
    imagePath: '/images/courses/CARSI Level 1 Mould Remediation.png',
    alt: 'CARSI Level 1 Mould Remediation',
  },
  {
    id: 'level-2-mould',
    title: 'Level 2 Mould Remediation',
    description: 'Intermediate mould remediation certification',
    imagePath: '/images/courses/CARSI Level 2 Mould Remediation.png',
    alt: 'CARSI Level 2 Mould Remediation',
  },
  {
    id: 'level-3-mould',
    title: 'Level 3 Mould Remediation',
    description: 'Advanced mould remediation certification',
    imagePath: '/images/courses/CARSI Level 3 Mould Remediation.png',
    alt: 'CARSI Level 3 Mould Remediation',
  },
  {
    id: 'risk-assessment',
    title: 'Risk Assessment',
    description: 'Comprehensive risk assessment protocols',
    imagePath: '/images/courses/CARSI Risk Assessment.png',
    alt: 'CARSI Risk Assessment',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Multiple Schema.org structured data for maximum SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursePageSchema(courses)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <Hero />
      <Features />
      <Statistics />
      <CourseCarousel courses={courses} />
      <Membership />
      <FAQ />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-carsi-blue-dark via-carsi-blue to-carsi-blue-light relative overflow-hidden">
        {/* Decorative 3D elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-carsi-orange/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
            Ready to Start Your Restoration Career?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of certified restoration professionals. Start your training today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-carsi-orange to-carsi-gold text-white px-10 py-4 rounded-xl font-bold text-lg shadow-3d-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105 border-b-4 border-carsi-gold/50">
              Enroll Now →
            </button>
            <button className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-carsi-blue shadow-3d transition-all transform hover:-translate-y-1 hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12 border-t-4 border-carsi-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 drop-shadow-lg">
                  <Image
                    src="/carsi-logo.png"
                    alt="CARSI Training Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">CARSI</h3>
                  <p className="text-xs text-gray-400">Training & Certification</p>
                </div>
              </div>
              <p className="text-gray-400">
                Professional restoration certification and training courses trusted by industry leaders.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-carsi-blue">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#courses" className="hover:text-carsi-orange transition-colors">All Courses</a></li>
                <li><a href="#" className="hover:text-carsi-orange transition-colors">Free Courses</a></li>
                <li><a href="#" className="hover:text-carsi-orange transition-colors">Certifications</a></li>
                <li><a href="#" className="hover:text-carsi-orange transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-carsi-blue">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#faq" className="hover:text-carsi-orange transition-colors">FAQ</a></li>
                <li><a href="#contact" className="hover:text-carsi-orange transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-carsi-orange transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-carsi-orange transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-carsi-blue">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-carsi-orange">✉</span>
                  info@carsi-training.com
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-carsi-orange">📞</span>
                  +1-XXX-XXX-XXXX
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-carsi-orange">🌐</span>
                  24/7 Support Available
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-charcoal-light mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CARSI Training. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
