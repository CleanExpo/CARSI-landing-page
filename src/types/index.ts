export interface Course {
  id: string
  title: string
  description: string
  imagePath: string
  alt: string
  category?: string
  duration?: string
  level?: 'Beginner' | 'Intermediate' | 'Advanced'
}

export interface ImageMetadata {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  sizes?: string
}
