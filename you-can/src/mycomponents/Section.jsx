import React from 'react'
import study from '../assets/studyInUk.png'
function Section() {


  const workOrStudy = [
    {
      image: "https://static.euronews.com/articles/stories/07/69/93/46/1200x675_cmsv2_6a2a4077-fc19-5897-bf74-bf8ab967a622-7699346.jpg",
      text: "Study in the UK"
    },
    {
      image: "https://static.vecteezy.com/system/resources/thumbnails/041/681/534/small/student-with-uk-flag-and-notebooks-photo.jpg",
      text: "Work in the UK"
    }
  ]

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='text-primary font-bold'>Choose your future</div>

      <div className='text-primary text-5xl pb-6'>Our services</div>

      <div className='grid w-full max-w-6xl grid-cols-1 gap-6 items-center justify-items-center md:grid-cols-2 lg:grid-cols-3'>
        {workOrStudy.map(wos => (
          <div
            className='group flex w-full max-w-sm flex-col items-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-1000 hover:shadow-md'
            key={wos.text}
          >
            <img
              src={wos.image}
              alt={wos.text}
              className='h-56 w-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 md:h-64'
            />
            <div className='p-4 text-center text-lg font-semibold text-slate-800'>{wos.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section