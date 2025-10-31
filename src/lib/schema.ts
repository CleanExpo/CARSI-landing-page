import type { Course } from '@/types'

// Organization Schema for CARSI
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'CARSI Training',
  description: 'Professional restoration certification and training courses',
  url: 'https://carsi-training.com',
  logo: 'https://carsi-training.com/logo.png',
  sameAs: [
    // Add social media URLs here
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    availableLanguage: ['English'],
  },
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
