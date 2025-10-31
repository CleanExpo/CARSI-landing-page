import type { Course } from '@/types'

// Enhanced Organization Schema for CARSI with LocalBusiness
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  name: 'CARSI Training',
  alternateName: 'Canadian Association of Restoration Specialists Inc',
  description: 'Professional restoration certification and training courses for water damage, mould remediation, structural drying, and disaster restoration',
  url: 'https://carsi-training.com',
  logo: 'https://carsi-training.com/logo.png',
  image: 'https://carsi-training.com/og-image.jpg',
  telephone: '+1-XXX-XXX-XXXX',
  email: 'info@carsi-training.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CA',
    addressRegion: 'ON',
    // Add specific address details
  },
  geo: {
    '@type': 'GeoCoordinates',
    // Add latitude and longitude for local SEO
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '2847',
    bestRating: '5',
  },
  sameAs: [
    // Add social media URLs here
    'https://facebook.com/carsitraining',
    'https://linkedin.com/company/carsitraining',
    'https://twitter.com/carsitraining',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+1-XXX-XXX-XXXX',
    email: 'support@carsi-training.com',
    availableLanguage: ['English', 'French'],
    areaServed: ['CA', 'US'],
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  },
  priceRange: '$$',
  paymentAccepted: 'Credit Card, PayPal, Invoice',
}

// Course List Schema
export const coursePageSchema = (courses: Course[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'CARSI Training Courses',
  description: 'Comprehensive restoration training and certification courses',
  numberOfItems: courses.length,
  itemListElement: courses.map((course, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Course',
      name: course.title,
      description: course.description,
      provider: {
        '@type': 'Organization',
        name: 'CARSI Training',
      },
      image: course.imagePath,
      educationalLevel: course.level || 'Professional',
    },
  })),
})

// Individual Course Schema
export const courseSchema = (course: Course) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: course.title,
  description: course.description,
  provider: {
    '@type': 'Organization',
    name: 'CARSI Training',
    url: 'https://carsi-training.com',
  },
  image: course.imagePath,
  educationalLevel: course.level || 'Professional',
  ...(course.duration && { timeRequired: course.duration }),
})

// Image Object Schema
export const imageSchema = (
  url: string,
  alt: string,
  width?: number,
  height?: number
) => ({
  '@context': 'https://schema.org',
  '@type': 'ImageObject',
  contentUrl: url,
  name: alt,
  description: alt,
  ...(width && { width: `${width}px` }),
  ...(height && { height: `${height}px` }),
})

// FAQ Page Schema for Rich Snippets
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are CARSI certifications recognized industry-wide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, CARSI training programs align with IICRC, RIA, and other industry standards, providing certifications recognized across North America by insurance companies, restoration contractors, and industry professionals.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to complete a course?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Course duration varies by certification level. Most courses can be completed in 30-40 hours of self-paced study, with some advanced certifications requiring additional time. You have flexible access to complete training on your schedule.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need prior experience to enroll?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No prior experience is required for introductory courses. We offer training for all skill levels, from beginners entering the restoration field to experienced professionals seeking advanced certifications.',
      },
    },
    {
      '@type': 'Question',
      name: 'What equipment or software do I need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You only need a computer, tablet, or smartphone with internet access. Our platform is mobile-friendly and works on all modern devices, allowing you to study from job sites, home, or anywhere.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there free courses available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We offer several complimentary courses to help you get started in restoration. These free courses provide valuable foundational knowledge and let you experience our training platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I don\'t pass the exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide comprehensive support to ensure your success. If needed, you can retake exams, and our 24/7 support team is available to help you understand any challenging concepts.',
      },
    },
  ],
}

// Breadcrumb Schema
export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://carsi-training.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Courses',
      item: 'https://carsi-training.com/courses',
    },
  ],
}
