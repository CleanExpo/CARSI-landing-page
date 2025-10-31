import Image from 'next/image'
import type { Course } from '@/types'

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={course.imagePath}
          alt={course.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">
          {course.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {course.description}
        </p>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
          Learn More
        </button>
      </div>
    </article>
  )
}
