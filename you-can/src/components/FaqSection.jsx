import React from 'react'

function FaqSection() {
  return (
    <section>
      <div className='text-primary justify-center text-center py-20 text-5xl md:text-6xl'>
        <span className='opacity-50 '>From documents to destination - </span> <br />
        <span>we're with you</span>
      </div>


      <span className='text-3xl py-6'>FAQ</span>
      <div className='flex flex-col md:flex-row'>
        <div>
          Accordion

        </div>
        <div className='font-light'>
          <h2>Opportunities in Europe — Work, Study and Relocation Support</h2>
          <p>Europe offers a wide range of opportunities for people who want to build a better future, increase their income, or gain international experience. Our company helps candidates from different countries access reliable opportunities in Europe, including employment and future education programs.We focus on creating a clear and structured path for relocation by providing support at every stage — from choosing the right direction to starting work or preparing for study programs. Our goal is to simplify the process and make opportunities in Europe more accessible.</p>
          <h2>Work Opportunities in Europe</h2>
          <p>We currently help candidates find jobs in countries such as Poland, Slovakia, and Serbia. These positions are available in different industries and are suitable for people with or without previous experience.Many roles include accommodation, clear working conditions, and support with basic documentation. We cooperate with verified employers to ensure transparency and reliability.
            Warehouse and logistics jobs
            Factory and production work
            Entry-level positions without experience
            Jobs with accommodation provided
            Opportunities with fast hiring process</p>
        </div>




      </div>
    </section>
  )
}

export default FaqSection