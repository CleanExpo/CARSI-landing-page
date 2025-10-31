import { CourseCard } from '@/components/CourseCard'
import { Hero } from '@/components/Hero'
import { coursePageSchema } from '@/lib/schema'
import type { Course } from '@/types'

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursePageSchema(courses)) }}
      />

      <Hero />

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Training Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </main>
  )
}
