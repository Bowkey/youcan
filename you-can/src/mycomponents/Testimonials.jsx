import React, { useRef, useState } from 'react'

function Testimonials() {
  const testimonials = [
    { videoUrl: 'https://www.youtube.com/embed/7bDIXdUFxwo?si=vCQldMWp7pZPvgUu' },
    { videoUrl: 'https://www.youtube.com/embed/csnipUwA_uU' },
    { videoUrl: 'https://www.youtube.com/embed/IM8fi_LAZXQ' },
    { videoUrl: "https://www.youtube.com/embed/v3itLkVkMuc" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const touchStartX = useRef(null)

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return

    const touchEndX = event.changedTouches[0].clientX
    const distance = touchStartX.current - touchEndX

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }

    touchStartX.current = null
  }

  return (
    <div className='mx-auto max-w-5xl py-10'>
      <div className='text-shadow-neutral-900 font-bold'>Choose your future</div>
      <div className='text-primary pb-6 text-5xl'>Our services</div>

      <div className='flex items-center gap-3'>
        {/* <button
          type='button'
          // onClick={prevSlide}
          className='h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-lg font-bold text-slate-700 shadow-sm transition hover:bg-slate-100 md:flex'
          aria-label='Previous testimonial'
        >
          ←
        </button> */}

        <div
          className='mx-auto w-full overflow-hidden  touch-pan-x'
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className='flex min-w-0 transition-transform duration-500 overflow-scroll ease-in-out scrollbar-gutter-stable'
            style={{ transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className='box-border w-full min-w-full px-2 md:w-1/2 md:min-w-[50%]'
              >
                <div className='overflow-hidden rounded-xl border border-slate-200 bg-slate-100'>
                  <iframe
                    width="417"
                    className='aspect-video w-full'
                    src={testimonial.videoUrl}
                    title={`testimonial-video-${index}`}
                    frameBorder='0'
                    allow='accelerometer; clipboard-write; encrypted-media; gyroscope; web-share'
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <button
          type='button'
          onClick={nextSlide}
          className='h-10 w-auto items-center justify-center rounded-full border border-slate-300 bg-white text-lg font-bold text-slate-700 shadow-sm transition hover:bg-slate-100 md:flex'
          aria-label='Next testimonial'
        >
          →
        </button> */}
      </div>
    </div>
  )
}

export default Testimonials