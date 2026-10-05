import React from 'react'

function Location() {
  return (
    <div>

      <div className='flex flex-col md:flex-row gap-10 justify-center py-20'>
        <div>
          <div className=' font-bold text-primary'>Find Us</div>

          <div className=''><span>Representative office</span><br />
            <span>(Appointments only)</span>
          </div>
        </div>



        <div>
          <img src="https://www.youcan.legal/wp-content/uploads/2025/07/map.webp" alt="location-map" />
        </div>

      </div>

    </div>
  )
}

export default Location