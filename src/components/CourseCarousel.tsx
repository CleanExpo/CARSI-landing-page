'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import type { Course } from '@/types'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface CourseCarouselProps {
  courses: Course[]
}

export function CourseCarousel({ courses }: CourseCarouselProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our Certification Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-leading restoration training programs recognized by professionals worldwide
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="course-carousel"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
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
                  <h3 className="text-lg font-bold mb-2 text-gray-900 line-clamp-2 min-h-[3.5rem]">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                    {course.description}
                  </p>
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Learn More →
                  </button>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .course-carousel .swiper-button-next,
        .course-carousel .swiper-button-prev {
          color: #2563eb;
          background: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .course-carousel .swiper-button-next:after,
        .course-carousel .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }

        .course-carousel .swiper-pagination-bullet {
          background: #2563eb;
          width: 12px;
          height: 12px;
        }

        .course-carousel .swiper-pagination-bullet-active {
          background: #1e40af;
          width: 30px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  )
}
