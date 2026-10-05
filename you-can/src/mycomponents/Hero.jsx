import React from 'react'
import faces from '../assets/faces.png'
import hero from '../assets/hero.png'
import { ArrowRight } from 'lucide-react'
function Hero() {
  const styles = {
    faces: {
      width: '100px',

    }
  }


  return (
    <section className='min-h-screen flex flex-col md:flex-row'>
      <div className='flex flex-col gap-10 py-10'>
        <div className='font-bold text-4xl mb-4'>
          <h2>We Help People Change Their Lives For The Better</h2>
        </div>
        <div>Study. Work. Live Abroad - Legally</div>

        <div className='flex flex-row items-center gap-3'>
          <img src={faces} alt="" style={styles.faces} />
          <span className='flex items-center gap-3'>
            <span>700+</span> <span>Happy <br />Client</span></span>
        </div>

        <div className='flex gap-7 bg-amber-200 text-2xl items-center'>
          <ArrowRight size={50}/>
          <span>Explore</span>
        </div>

      </div>


      <div className=''>
        <img src={hero} alt="" />
      </div>


    </section>
  )
}

export default Hero