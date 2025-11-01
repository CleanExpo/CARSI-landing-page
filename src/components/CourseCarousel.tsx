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
              <article className="group bg-white rounded-xl shadow-3d-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 h-full border-t-4 border-carsi-blue">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={course.imagePath}
                    alt={course.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* 3D overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-charcoal line-clamp-2 min-h-[3.5rem] group-hover:text-carsi-blue transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                    {course.description}
                  </p>
                  <button className="w-full bg-gradient-to-r from-carsi-blue to-carsi-blue-light text-white py-3 px-4 rounded-lg hover:from-carsi-orange hover:to-carsi-gold transition-all font-semibold shadow-3d transform hover:-translate-y-1">
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
          color: #2B8FD8;
          background: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0 -3px 0 rgba(0, 0, 0, 0.1);
        }

        .course-carousel .swiper-button-next:hover,
        .course-carousel .swiper-button-prev:hover {
          background: linear-gradient(135deg, #F39C12, #E67E22);
          color: white;
          transform: translateY(-2px);
        }

        .course-carousel .swiper-button-next:after,
        .course-carousel .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }

        .course-carousel .swiper-pagination-bullet {
          background: #2B8FD8;
          width: 12px;
          height: 12px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .course-carousel .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #F39C12, #E67E22);
          width: 30px;
          border-radius: 6px;
          box-shadow: 0 4px 6px rgba(243, 156, 18, 0.4);
        }
      `}</style>
    </section>
  )
}
