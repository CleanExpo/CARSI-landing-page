'use client'

import { useState } from 'react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Are CARSI certifications recognized industry-wide?',
      answer: 'Yes, CARSI training programs align with IICRC, RIA, and other industry standards, providing certifications recognized across North America by insurance companies, restoration contractors, and industry professionals.',
    },
    {
      question: 'How long does it take to complete a course?',
      answer: 'Course duration varies by certification level. Most courses can be completed in 30-40 hours of self-paced study, with some advanced certifications requiring additional time. You have flexible access to complete training on your schedule.',
    },
    {
      question: 'Do I need prior experience to enroll?',
      answer: 'No prior experience is required for introductory courses. We offer training for all skill levels, from beginners entering the restoration field to experienced professionals seeking advanced certifications.',
    },
    {
      question: 'What equipment or software do I need?',
      answer: 'You only need a computer, tablet, or smartphone with internet access. Our platform is mobile-friendly and works on all modern devices, allowing you to study from job sites, home, or anywhere.',
    },
    {
      question: 'Are there free courses available?',
      answer: 'Yes! We offer several complimentary courses to help you get started in restoration. These free courses provide valuable foundational knowledge and let you experience our training platform.',
    },
    {
      question: 'What happens if I don\'t pass the exam?',
      answer: 'We provide comprehensive support to ensure your success. If needed, you can retake exams, and our 24/7 support team is available to help you understand any challenging concepts.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about CARSI training
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg text-gray-900">
                  {faq.question}
                </span>
                <span className="text-2xl text-blue-600">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
