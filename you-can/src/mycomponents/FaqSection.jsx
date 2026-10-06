import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react"

function FaqSection() {
  const faq = [{
    question: "1. What does YouCanLegal do?",
    answer: "YouCanLegal helps people study, work, and relocate abroad legally. We provide full support — from choosing an opportunity to starting your new life in another country."
  },
  {
    question: "2. Who can apply for your programs?",
    answer: `Our services are designed for individuals who want to: 

    - work in Europe
    - study abroad
    - legally relocate to another country 
    
    Each program has its own requirements, which we explain before starting.`
  },
  {
    question: "3. What services do you provide?",
    answer: `We offer full support, including:

job or study program selection
document preparation
visa or residence permit guidance
step-by-step support throughout the process`
  },
  {
    question: "4. Is YouCanLegal a legitimate company?",
    answer: "Yes, YouCanLegal operates as a legally registered company.We focus on transparent processes and cooperate with verified partners and employers."
  },
  {
    question: "5. How does the process work?",
    answer: `The process is simple and structured:

- Initial consultation
- Program selection
- Document preparation
- Application submission
- Relocation and start
You are guided at every step.`
  },
  {
    question: "6. Why should I choose YouCanLegal?",
    answer: `Clients choose us because:

we focus on legal and transparent processes
we provide step-by-step guidance
we work with verified opportunities abroad
we support clients until they start their journey`
  }

  ]

  // document.getElementById("accord").style.display = "none"

  return (
    <section>

      <div>

        <div className='text-primary justify-center text-center py-20 text-5xl md:text-6xl'>
          <span className='opacity-50 '>From documents to destination - </span> <br />
          <span>we're with you</span>
        </div>


        <span className='text-3xl py-6'>FAQ</span>

        <div className='flex flex-col md:flex-row justify-center gap-10 py-10'>

          <div>
            <Accordion defaultValue={["item-1"]} className="max-w-full min-w-md">
              {faq.map((item) => (
                <AccordionItem value={item.question} key={item.question} className="mb-2">
                  <AccordionTrigger className="hover:cursor-pointer bg-blue-200 px-2 rounded-s-sm ">{item.question}</AccordionTrigger>
                  <AccordionContent className='px-4 py-2'>
                    <p className="font-light" style={{ whiteSpace: 'pre-line' }}>{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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

            <button id="expand"




            >
              Expand
            </button>
            <div id="more-info" className="hidden">some text</div>
            <button id="collapse" className="hover:cursor-pointer text-center text-3xl hidden">
              collapse
            </button>

          </div>

        </div>
      </div>

    </section >
  )
}

export default FaqSection